import styled from "@emotion/styled";

export const AuthorizationForm = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin: 0 auto;

  @media only screen and (max-width: 1400px) {
    width: 20%;
  }

  @media only screen and (max-width: 1026px) {
    width: 40%;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const SignButton = styled.button`
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

  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  background: linear-gradient(to right, #6077bc, #606060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
`;
