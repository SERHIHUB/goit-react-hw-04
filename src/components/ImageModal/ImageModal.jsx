import { useState } from "react";
import css from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};

const ImageModal = ({ isOpen, onClose, modalPic, altValue }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className={css.container}>
        <img src={modalPic} alt={altValue} />
      </div>
    </Modal>
  );
};

export default ImageModal;
