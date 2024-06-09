import styled from "@emotion/styled";

export const Error = styled.div<{ isValid?: boolean; isSubmitted?: boolean }>`
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;

  ${({ isValid, isSubmitted }) =>
    isSubmitted &&
    (isValid
      ? `
      color: #27B274;
    `
      : `
      color: #FF7F7F;
    `)}
`;

export const ErrorWrapper = styled.div<{ isLarge?: boolean }>`
  ${({ isLarge }) =>
    isLarge
      ? `
      min-height: 65px;
    `
      : `
      min-height: 40px;
    `}
  margin-top: 6px;
`;
