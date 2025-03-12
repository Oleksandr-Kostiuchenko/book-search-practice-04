import style from "./BookItem.module.css";

const BookItem = ({ elementData }) => {
  return (
    <div>
      <p>{elementData.volumeInfo.title}</p>
    </div>
  );
};

export default BookItem;
