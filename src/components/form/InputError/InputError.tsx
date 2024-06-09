import { useFormContext } from "react-hook-form";
import { Error, ErrorWrapper } from "./styles";
import { IInputFieldProps } from "../InputField/types";
import getGroupedFormErrors from "../../../utils/form/getGroupedFormErrors";

const InputError = ({ name, validationErrors, isLarge }: IInputFieldProps) => {
  const {
    formState: { errors, isSubmitted },
  } = useFormContext();

  return (
    <ErrorWrapper isLarge={isLarge}>
      {errors[name] &&
        validationErrors.map((error) => (
          <Error
            key={window.crypto.randomUUID()}
            isValid={!getGroupedFormErrors(errors)[name].includes(error)}
            isSubmitted={isSubmitted}
          >
            {error}
          </Error>
        ))}
    </ErrorWrapper>
  );
};

export default InputError;
