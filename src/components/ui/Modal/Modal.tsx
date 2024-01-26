import { ReactNode, FC } from "react";

import { createPortal } from "react-dom";

import Backdrop from "../Backdrop/Backdrop";

interface IModalProps {
  isModalOpen: boolean;
  children: ReactNode;
  onBackdropClick: () => void;
}

// * Компонент сделан так, чтобы можно было вставить любую карточку или любое модальное окно в случае разных всплываюших окон

const Modal: FC<IModalProps> = ({ children, onBackdropClick, isModalOpen }) => (
  <>
    {isModalOpen &&
      createPortal(
        <>
          <Backdrop onClick={onBackdropClick} />
          {children}
        </>,
        document.body,
      )}
  </>
);

export default Modal;
