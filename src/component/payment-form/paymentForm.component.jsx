import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";
import { PaymentFormContract, FormContainer } from "./paymentForm.styles";
import { useSelector } from "react-redux";
import { selectCartPrice } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selection";
import { useState } from "react";

const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const price = useSelector(selectCartPrice);
    const user = useSelector(selectCurrentUser);
    const [isLoading, setIsLoading] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true)

        const response = await fetch("/.netlify/functions/stripe-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({amount: price * 100})
        }).then((res) => res.json());

        const {paymentIntent: {client_secret}} = await response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user ? user.displayName : "guest"
                } 
            }
        })

        setIsLoading(false);

        if (paymentResult.error) {
            alert(paymentResult.error)
        } else {
            if (paymentResult.paymentIntent.status == "succeeded") {
                alert("Payment Successful");
            }
        }

    }

    return (
        <PaymentFormContract>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <Button isLoading={isLoading} customStyles={BUTTON_TYPES.inverted} text="Pay now"  />
            </FormContainer>
        </PaymentFormContract>
    )
    
}

export default Payment;