import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import BalloonsPng from "assets/balloons.png";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Content = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  text-align: center;
`;

export const Button = styled.button`
  background: linear-gradient(to right, #6077bc, #606060);
  color: #fff;
  font-size: 15px;
  padding: 10px 50px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: 0.6s;
  opacity: 0.8;
  margin-top: 30px;
  width: 100%;
  z-index: 999;

  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const balloonsFloat = keyframes`
  0% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, -100%);
  }
`;

export const Balloons = styled.div`
  background-size: 80px;
  position: absolute;
  background-image: url(${BalloonsPng});
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-repeat: repeat-x;
  animation: ${balloonsFloat} 8s ease-in-out infinite;
  z-index: -1;
`;
