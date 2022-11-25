import { useState } from "react"
import { createWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.style.scss"
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const initialUserInfo = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(initialUserInfo);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetForm = () => {
        setFormFields(initialUserInfo);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password.value != confirmPassword.value){
            alert("Not the same password")
            return;
        }
        try {
            const { user } = await createWithEmailAndPassword(email, password);
            createUserDocumentFromAuth(user, {displayName});
            resetForm();
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an Account?</h2>
            <span>Sign Up With Your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text" 
                    onChange={handleOnChange} 
                    value={displayName} 
                    name="displayName" 
                    required
                />
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
                <FormInput
                    label="Confirm Password"
                    type="password" 
                    onChange={handleOnChange} 
                    value={confirmPassword} 
                    name="confirmPassword" 
                    required
                />
                <Button text="Submit" type="submit" />
            </form>
        </div>
    )
}

export default SignUpForm;