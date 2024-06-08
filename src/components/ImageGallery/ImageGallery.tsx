import ImageCard from "../ImageCard/ImageCard.js";
import {FC} from "react"
import css from "./ImageGallery.module.css"
import {Image} from "../types"

interface ImageGalleryProps {
  items: Image[];
  onOpen: (image:Image)=> void;

}

 const ImageGallery: FC<ImageGalleryProps>=({ items, onOpen })=> {
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

export default ImageGallery