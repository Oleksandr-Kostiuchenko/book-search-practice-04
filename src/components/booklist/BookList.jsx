import style from "./BookList.module.css";
import BookItem from "../bookitem/BookItem";

import { AnimatePresence, motion } from "framer-motion";

const BookList = ({ booksArr }) => {
  return (
    <ul className={style.bookList}>
      <AnimatePresence mode="popLayout">
        {booksArr.map((element) => (
          <motion.li
            className={style.bookItem}
            key={`${element.id}/${element.etag}`}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <BookItem elementData={element} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default BookList;
