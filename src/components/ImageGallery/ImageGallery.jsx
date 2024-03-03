import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
// import { IoSpeedometerOutline } from "react-icons/io5";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ searchResult, scroll, modalUrl, isOpen }) => {
  const scrollRef = useRef();
  const [urlModal, setUrlModal] = useState("");
  const [urlAlt, setUrlAlt] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    modalUrl(urlModal, urlAlt);
    isOpen(modalIsOpen);
  }, [urlModal]);

  useEffect(() => {
    const heightScroll = scrollRef.current.getBoundingClientRect();
    window.scrollTo({
      top: heightScroll.height,
      behavior: "smooth",
    });
  }, [scroll]);

  return (
    <ul className={css.imageList} ref={scrollRef} id="list">
      {searchResult.map((photo) => {
        return (
          <li
            className={css.imageItem}
            key={photo.id}
            onClick={() => {
              setUrlModal(photo.urls.regular);
              setModalIsOpen(true);
              setUrlAlt(photo.alt_description);
            }}
          >
            <ImageCard
              small={photo.urls.small}
              alt_description={photo.alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
