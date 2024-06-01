import css from "./ImageCard.module.css"

export default function ImageCard({src, alt, openModal}) {
  return (
    <div className={css.thumb }>
      <img src={src} alt={alt}  className={css.image } onClick={openModal}/>
    </div>
  );
}
