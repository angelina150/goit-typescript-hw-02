import { useEffect, useState } from "react";
import getPhotosBySearchValue from "../../services/api";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Photo } from "../../types";

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const onSubmit = (searchTerm: string) => {
    setSearchValue(searchTerm);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (!searchValue) return;

    async function fetchPhotosBySearchValue() {
      try {
        setIsLoading(true);
        const { data } = await getPhotosBySearchValue(searchValue, page);
        if (data.results.length === 0) {
          setError("No results found for your search.");
          setIsLoading(false);
          return;
        }
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotosBySearchValue();
  }, [searchValue, page]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {photos.length > 0 && (
        <ImageGallery photos={photos} onPhotoClick={openModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {page < totalPages && <LoadMoreBtn onClick={loadMoreImages} />}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        photo={selectedPhoto}
      />
    </div>
  );
}

export default App;
