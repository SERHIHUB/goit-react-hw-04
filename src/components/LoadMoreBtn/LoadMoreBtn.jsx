import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleSubmit }) => {
  return (
    <div>
      <button className={css.btn} onClick={handleSubmit} type="submit">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
