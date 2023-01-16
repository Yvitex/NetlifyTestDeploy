import { getDefaultNormalizer } from "@testing-library/react";
import { BaseButton, GoogleButton, InvertedButton, ButtonSpinner } from "./button.style";

export const BUTTON_TYPES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted"
}

const getButton = (buttonType = BUTTON_TYPES.base) => (
    {
        [BUTTON_TYPES.base]: BaseButton,
        [BUTTON_TYPES.google]: GoogleButton,
        [BUTTON_TYPES.inverted]: InvertedButton
    }[buttonType]
)

const Button = ({text, isLoading, customStyles, ...otherProps}) => {
    const CustomButton = getButton(customStyles);
    return (
        <CustomButton {...otherProps}>{isLoading ? <ButtonSpinner /> : text}</CustomButton>
    )
}

export default Button; 