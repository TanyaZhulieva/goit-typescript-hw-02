import css from "./ImageCard.module.css";
import { FC } from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  openModal: () => void;
}

const ImageCard: FC<ImageCardProps> = ({ src, alt, openModal }) => {
  return (
    <div className={css.thumb}>
      <img src={src} alt={alt} className={css.image} onClick={openModal} />
    </div>
  );
};

export default ImageCard;
