import { ClipLoader } from "react-spinners";
import css from "./loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <ClipLoader color="#007bff" size={50} />
    </div>
  );
};

export default Loader;
