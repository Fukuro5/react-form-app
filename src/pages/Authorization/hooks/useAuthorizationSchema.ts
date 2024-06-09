import { useTranslation } from "react-i18next";
import * as yup from "yup";

const useAuthorizationSchema = () => {
  const { t } = useTranslation();

  return yup.object({
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t("fields.email.validation.valid"),
      ),
    password: yup
      .string()
      .min(8, t("fields.password.validation.8orMoreCharacters"))
      .max(64, t("fields.password.validation.64orLessCharacters"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z]).*$/,
        t("fields.password.validation.uppercaseAndLowercase"),
      )
      .matches(/^(?=.*\d).*$/, t("fields.password.validation.atLeastOneNumber"))
      .matches(/^[^\s]*$/, t("fields.password.validation.noSpaces")),
  });
};

export default useAuthorizationSchema;
