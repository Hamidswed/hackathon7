import React, { useEffect } from "react";

import './modal.css'

interface ModalInterface {
  onClose: () => void,
  children: string,
}

const Modal = ({ children, onClose }: ModalInterface) => {
  useEffect(() => {
    window.addEventListener("keydown", onHandleEsc);
    const body:any = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onHandleEsc);
      const body:any = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const onHandleEsc = (e: { code: string; }) => e.code === "Escape" && onClose();

  const onHandleClick = (e: { target: any; currentTarget: any; }) => e.target === e.currentTarget && onClose();

  return (
    <>
      <div className="ModalOverlay selector" onClick={onHandleClick}>
        <div className="Modal">{children}</div>
      </div>
    </>
  );
};

export default Modal;
