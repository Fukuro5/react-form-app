import { useTranslation } from "react-i18next";
import {
  Balloons,
  Button,
  Content,
  Description,
  ModalWrapper,
  Title,
} from "./styles";
import { IModalProps } from "./types";

const Modal = ({
  isModalOpen,
  title,
  description,
  handleCloseModal,
}: IModalProps) => {
  const { t } = useTranslation();

  if (!isModalOpen) return null;

  return (
    <ModalWrapper>
      <Content>
        <Title>{title}</Title>

        <Description>{description}</Description>

        <Button onClick={handleCloseModal}>{t("common.ok")}</Button>

        <Balloons />
      </Content>
    </ModalWrapper>
  );
};

export default Modal;
