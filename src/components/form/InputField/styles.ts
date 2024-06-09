import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label<{ isDirty?: boolean }>`
  position: absolute;
  left: 12px;
  top: 7px;
  cursor: text;

  ${({ isDirty }) =>
    isDirty &&
    `
      top: -25px;
      color: #6F91BC;
      font-weight: 500;
    `}

  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    font-size 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    top 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

export const Input = styled.input<{ isValid?: boolean; isSubmitted?: boolean }>`
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #6f91bc;
  outline: none;
  width: 100%;

  ${({ isValid, isSubmitted }) =>
    isSubmitted &&
    (isValid
      ? `
      border: 2px solid #27B274;
    `
      : `
      border: 2px solid #FF7F7F;
    `)}
`;
