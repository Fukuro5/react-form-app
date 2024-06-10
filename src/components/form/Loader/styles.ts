import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ANIMATION_DELAY } from "./consts";

const fade = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const LoaderItem = styled.div<{ index: number }>`
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 100%;
  animation: ${fade} 1.5s infinite;
  animation-delay: ${({ index }) => `${index * ANIMATION_DELAY}`}s;
`;
