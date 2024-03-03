import css from "./ImageCard.module.css";

const ImageCard = ({ small, alt_description }) => {
  return (
    <div className={css.container}>
      <img className={css.pic} src={small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
