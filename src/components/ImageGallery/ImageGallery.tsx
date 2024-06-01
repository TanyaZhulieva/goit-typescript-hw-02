import ImageCard from "../ImageCard/ImageCard.js";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ items, onOpen }) {
  return (
    <ul className={css.gallery }>
      {items.map((item) => {
        return (
          <li key={item.id} className={css.item}>
            <ImageCard 
            src={item.urls.small} alt={item.alt_description} openModal={()=>onOpen(item)}/>
          </li>
        );
      })}
    </ul>
  );
}
