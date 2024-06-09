import en from "../../i18n/locales/en.json";

export const PASSWORD_VALIDATION_ERRORS = Object.values(
  en.fields.password.validation,
);

export const EMAIL_VALIDATION_ERRORS = Object.values(
  en.fields.email.validation,
);

export const SIGN_UP_FORM_FIELDS = {
  email: "email",
  password: "password",
} as const;
