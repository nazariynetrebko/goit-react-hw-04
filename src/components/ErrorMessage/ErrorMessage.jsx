import css from "./errorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <div className={css.error}>{message}</div>;
};

export default ErrorMessage;
