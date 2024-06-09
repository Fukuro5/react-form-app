import { FieldErrors, FieldValues } from "react-hook-form";

const getGroupedFormErrors = (
  errors: FieldErrors<FieldValues>,
): Record<string, string[]> =>
  Object.entries(errors).reduce(
    (acc, [key, value]) => {
      if (value?.types) {
        return { ...acc, [key]: Object.values(value.types).flat() };
      }

      return acc;
    },
    {
      email: [],
      password: [],
    },
  );

export default getGroupedFormErrors;
