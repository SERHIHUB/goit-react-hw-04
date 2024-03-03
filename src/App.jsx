import { useEffect } from "react";
import { useState } from "react";
import { Puff } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./images-api";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetchImages(query, page);
        setTotalPage(response.total_pages);
        setImages((prevImages) => {
          return [...prevImages, ...response.results];
        });
      } catch (error) {
        setError(true);
        toast.error("Ssory, try later please .", { duration: 2000 });
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = (newQuery) => {
    if (query === newQuery) {
      return;
    }
    setImages([]);
    setQuery(newQuery);

    setPage(1);
  };

  const handleModal = (urlPic, altModal) => {
    setModalUrl(urlPic);
    setModalAlt(altModal);
  };

  const openModal = (open) => {
    setModalIsOpen(open);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {error && <Toaster />}
      {images.length > 0 && (
        <ImageGallery
          searchResult={images}
          scroll={handleLoadMore}
          modalUrl={handleModal}
          isOpen={openModal}
        />
      )}
      {isLoading && (
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
        />
      )}
      {images.length > 0 && !isLoading && page !== totalPage && (
        <LoadMoreBtn handleSubmit={handleLoadMore} />
      )}
      <ImageModal
        modalPic={modalUrl}
        altValue={modalAlt}
        isOpen={modalIsOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
