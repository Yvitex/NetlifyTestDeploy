import { useState } from "react"
import {signInWithEmail} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.style.scss"
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInWithGoogle } from "../../utils/firebase/firebase.utils";
import { BUTTON_TYPES } from "../button/button.component";
import { useDispatch } from "react-redux";
import { googleSigninStart, emailSigninStart } from "../../store/user/user.action";

const initialUserInfo = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(initialUserInfo);
    const {email, password} = formFields;
    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetForm = () => {
        setFormFields(initialUserInfo);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSigninStart(email, password));
            // const { user } = await signInWithEmail(email, password);
            resetForm();
        } catch (error) {
            if(error.code == "auth/user-not-found"){
                alert("Account Not Found")
            }
            if(error.code == "auth/wrong-password"){
                alert("Incorrect Password");
            }
            console.log(error);
        }


    }

    const googleSignIn = async() => {
        dispatch(googleSigninStart());
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an Account?</h2>
            <span>Sign Up With Your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email" 
                    onChange={handleOnChange} 
                    value={email} 
                    name="email" 
                    required
                />
                <FormInput
                    label="Password"
                    type="password" 
                    onChange={handleOnChange} 
                    value={password} 
                    name="password" 
                    required
                />
                <div className="buttons-container">
                    <Button text="Sign In" type="submit" />
                    <Button type="button" text="Google sign in" onClick={googleSignIn} customStyles={BUTTON_TYPES.google} />    
                </div>
            </form>
        </div>
    )
}

export default SignInForm;