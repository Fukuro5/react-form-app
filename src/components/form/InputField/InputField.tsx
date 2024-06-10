import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Input, InputWrapper, Label, PasswordVisibilityButton } from "./styles";
import { IInputFieldProps } from "./types";
import InputError from "../InputError/InputError";

const InputField = ({
  name,
  validationErrors,
  isLarge,
  isPassword,
}: IInputFieldProps) => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors, dirtyFields, isSubmitted },
  } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <InputWrapper>
        <Input
          {...register(name)}
          id={name}
          isValid={!errors[name]}
          isSubmitted={isSubmitted}
          type={isPassword && !isOpen ? "password" : "text"}
        />

        <Label htmlFor={name} isDirty={dirtyFields[name]}>
          {t(`fields.${name}.label`)}
        </Label>

        {isPassword && (
          <PasswordVisibilityButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          />
        )}
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
