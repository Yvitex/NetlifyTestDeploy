import { FormInputLabel, Input, Group } from "./form-input.style";

const FormInput = ({label, ...otherComponent}) => {
    return (
        <Group>
            <Input {...otherComponent} />
            {label && (
                <FormInputLabel shrink={otherComponent.value.length}>{label}</FormInputLabel>
            )}
            
        </Group>
    )
}

export default FormInput;