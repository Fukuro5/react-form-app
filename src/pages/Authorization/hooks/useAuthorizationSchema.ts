import {
  AT_LEAST_ONE_NUMBER_REGEX,
  EMAIL_REGEX,
  NO_SPACES_REGEX,
  AT_LEAST_ONE_UPPERCASE_REGEX,
} from "constants/regex";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

const useAuthorizationSchema = () => {
  const { t } = useTranslation();

  return yup.object({
    email: yup
      .string()
      .matches(EMAIL_REGEX, t("fields.email.validation.valid")),
    password: yup
      .string()
      .min(8, t("fields.password.validation.8orMoreCharacters"))
      .max(64, t("fields.password.validation.64orLessCharacters"))
      .matches(
        AT_LEAST_ONE_UPPERCASE_REGEX,
        t("fields.password.validation.atLeastOneUppercaseLetter"),
      )
      .matches(
        AT_LEAST_ONE_NUMBER_REGEX,
        t("fields.password.validation.atLeastOneNumber"),
      )
      .matches(NO_SPACES_REGEX, t("fields.password.validation.noSpaces")),
  });
};

export default useAuthorizationSchema;
