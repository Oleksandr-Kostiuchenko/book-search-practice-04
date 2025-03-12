import style from "./BookList.module.css";
import BookItem from "../bookitem/BookItem";

const BookList = ({ booksArr }) => {
  return (
    <ul>
      {booksArr.map((element) => (
        <li key={element.id}>
          <BookItem elementData={element} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
