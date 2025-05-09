import css from "./imageCard.module.css";

const ImageCard = ({ image, onOpenModal }) => {
  return (
    <div className={css.card} onClick={() => onOpenModal(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;
