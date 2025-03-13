import style from "./BookItem.module.css";

const BookItem = ({ elementData }) => {
  // const imgHref = elementData.volumeInfo.imageLinks.thumbnail;

  return (
    <div className={style.bookWrapper}>
      <a href={elementData.volumeInfo.canonicalVolumeLink} target="_blank">
        <img
          className={style.bookImage}
          src={
            elementData.volumeInfo.imageLinks !== undefined
              ? elementData.volumeInfo.imageLinks.thumbnail
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
          }
          alt="book image"
        />
      </a>
      <div className={style.descriptionWrapper}>
        <p className={style.bookTitle}>{elementData.volumeInfo.title}</p>
        <p className={style.bookDescription}>
          {elementData.volumeInfo.authors}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
