import ImageCard from "../ImageCard/ImageCard";
import css from "./imageGallery.module.css";

const ImageGallery = ({ images, onOpenModal }) => {
  if (!images.length) return null;

  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
