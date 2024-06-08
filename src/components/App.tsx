import { useEffect, useState } from "react";
import { fetchImages } from "../images-api.js";
import ImageGallery from "./ImageGallery/ImageGallery.js";
import SearchBar from "./SearchBar/SearchBar.js";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.js";
import ErrorMessage from "./ErrorMessage/ErrorMessage.js";
import Loader from "./Loader/Loader.js";
import ImageModal from "./ImageModal/ImageModal.js";
import { Image } from "./types.js";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

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
    if (image.urls && image.urls.regular) {
      setSelectedImage(image);
      setIsOpen(true);
    } else {
      console.error("Image URLs or regular size URL is undefined");
    }
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
       
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage.urls.regular}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        />
      )}
    </>
  );
}
