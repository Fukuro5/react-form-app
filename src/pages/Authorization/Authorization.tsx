import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import InputField from "components/form/InputField/InputField";
import Loader from "components/form/Loader/Loader";
import { AuthorizationForm, SignButton, Title } from "./styles";
import {
  EMAIL_VALIDATION_ERRORS,
  LOADER_DELAY,
  PASSWORD_VALIDATION_ERRORS,
  SIGN_UP_FORM_FIELDS,
} from "./consts";
import useAuthorizationSchema from "./hooks/useAuthorizationSchema";

const Authorization = () => {
  const { t } = useTranslation();
  const schema = useAuthorizationSchema();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });

  const { handleSubmit, reset } = form;

  const onSubmit = handleSubmit(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccessModalOpen(true);
    }, LOADER_DELAY);
  });

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
    reset();
  };

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
          isPassword
        />

        <SignButton type="submit">
          {isLoading ? <Loader /> : t("authorizationPage.submitButton")}
        </SignButton>

        <Modal
          isModalOpen={isSuccessModalOpen}
          title={t("successModal.title")}
          description={t("successModal.description")}
          handleCloseModal={handleCloseModal}
        />
      </AuthorizationForm>
    </FormProvider>
  );
};

export default Authorization;
