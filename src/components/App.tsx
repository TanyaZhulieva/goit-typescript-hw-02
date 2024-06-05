import { useEffect, useState } from "react";
import { fetchImages } from "../images-api.js";
import ImageGallery from "./ImageGallery/ImageGallery.js";
import SearchBar from "./SearchBar/SearchBar.js";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.js";
import ErrorMessage from "./ErrorMessage/ErrorMessage.js";
import Loader from "./Loader/Loader.js";
import ImageModal from "./ImageModal/ImageModal.js";
import {Image} from "./types.js"

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(58, 58, 58, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "",
  },
};

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image |null>(null);

  console.log(images);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  function openModal(image: Image) {
    setSelectedImage(image.urls.regular);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}

      {images.length > 0 && <ImageGallery items={images} onOpen={openModal} />}

      {isLoading && <Loader />}

      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        imageUrl={selectedImage}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      />
    </>
  );
}
