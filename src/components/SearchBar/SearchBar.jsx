import { useState } from "react";
import toast from "react-hot-toast";
import css from "./searchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      toast.error("Будь ласка, введіть пошуковий запит.");
      return;
    }
    onSubmit(searchTerm);
    setSearchTerm("");
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Пошук
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
