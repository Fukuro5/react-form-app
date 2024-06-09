import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input, InputWrapper, Label } from "./styles";
import { IInputFieldProps } from "./types";
import InputError from "../InputError/InputError";

const InputField = ({ name, validationErrors, isLarge }: IInputFieldProps) => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors, dirtyFields, isSubmitted },
  } = useFormContext();

  return (
    <>
      <InputWrapper>
        <Input
          {...register(name)}
          id={name}
          isValid={!errors[name]}
          isSubmitted={isSubmitted}
        />

        <Label htmlFor={name} isDirty={dirtyFields[name]}>
          {t(`fields.${name}.label`)}
        </Label>
      </InputWrapper>

      <InputError
        name={name}
        validationErrors={validationErrors}
        isLarge={isLarge}
      />
    </>
  );
};

export default InputField;
