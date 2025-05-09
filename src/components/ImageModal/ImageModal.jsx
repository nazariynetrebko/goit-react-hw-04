import Modal from "react-modal";
import css from "./imageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}>
      <img
        src={image.urls.regular}
        alt={image.alt_description || "Image"}
        className={css.image}
      />
      <div className={css.info}>
        <p>Автор: {image.user.name}</p>
        <p>Лайки: {image.likes}</p>
        {image.description && <p>Опис: {image.description}</p>}
      </div>
    </Modal>
  );
};

export default ImageModal;
