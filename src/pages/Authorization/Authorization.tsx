import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import InputField from "components/form/InputField/InputField";
import { AuthorizationForm, SignButton, Title } from "./styles";
import {
  EMAIL_VALIDATION_ERRORS,
  PASSWORD_VALIDATION_ERRORS,
  SIGN_UP_FORM_FIELDS,
} from "./consts";
import useAuthorizationSchema from "./hooks/useAuthorizationSchema";

const Authorization = () => {
  const { t } = useTranslation();
  const schema = useAuthorizationSchema();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const form = useForm({
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(() => {
    setIsSuccessModalOpen(true);
  });

  return (
    <FormProvider {...form}>
      <AuthorizationForm onSubmit={onSubmit}>
        <Title>{t("authorizationPage.title")}</Title>

        <InputField
          name={SIGN_UP_FORM_FIELDS.email}
          validationErrors={EMAIL_VALIDATION_ERRORS}
        />

        <InputField
          name={SIGN_UP_FORM_FIELDS.password}
          validationErrors={PASSWORD_VALIDATION_ERRORS}
          isLarge
        />

        <SignButton type="submit">
          {t("authorizationPage.submitButton")}
        </SignButton>

        <Modal
          isModalOpen={isSuccessModalOpen}
          title={t("successModal.title")}
          description={t("successModal.description")}
          handleCloseModal={() => setIsSuccessModalOpen(false)}
        />
      </AuthorizationForm>
    </FormProvider>
  );
};

export default Authorization;
