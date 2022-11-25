import { getDefaultNormalizer } from "@testing-library/react";
import { BaseButton, GoogleButton, InvertedButton } from "./button.style";

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

const Button = ({text, customStyles, ...otherProps}) => {
    const CustomButton = getButton(customStyles);
    return (
        <CustomButton {...otherProps}>{text}</CustomButton>
    )
}

export default Button; 