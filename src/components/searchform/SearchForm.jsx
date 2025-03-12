import style from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const input = form.elements.userQuery;

    onSearch(input.value.trim());
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" name="userQuery" />
      <button type="submit">Search a book</button>
    </form>
  );
};

export default SearchForm;
