import css from "./loadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={css.button} onClick={onLoadMore}>
      Завантажити ще
    </button>
  );
};

export default LoadMoreBtn;
