import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FormEvent, FC } from "react";
interface SearchBarProps {
  onSubmit: (searchTerm: string) => void;
}
const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const topic = form.elements.namedItem("topic") as HTMLInputElement;
    if (topic.value.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSubmit(topic.value);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          🔍
        </button>
        <input
          className={css.input}
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
