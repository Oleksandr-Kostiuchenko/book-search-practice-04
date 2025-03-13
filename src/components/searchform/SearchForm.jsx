import style from "./SearchForm.module.css";

import { RiBookMarkedFill } from "react-icons/ri";

const SearchForm = ({ onSearch }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const input = form.elements.userQuery;

    if (input.value.trim() === "") {
      alert("Please enter your query");
      return;
    }

    onSearch(input.value.trim());
  };

  return (
    <form onSubmit={onFormSubmit} className={style.formEl} autoComplete="off">
      <div className={style.inputWrapper}>
        <RiBookMarkedFill className={style.bookIcon} />
        <input className={style.inputEl} type="text" name="userQuery" />
      </div>
      <button type="submit" className={style.formButton}>
        Search a book
      </button>
    </form>
  );
};

export default SearchForm;
