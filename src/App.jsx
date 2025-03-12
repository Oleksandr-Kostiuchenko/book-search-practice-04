//* Import modules
import { useState, useEffect } from "react";
import { fetchData } from "./fetchData";
import "./App.css";

//* Import components
import SearchForm from "./components/searchform/SearchForm";
import BookList from "./components/booklist/BookList";

function App() {
  const [bookData, setBookData] = useState([]);

  const [userQuery, setUserQuery] = useState("");
  const [page, setPage] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = (topic) => {
    console.log(topic);
    setUserQuery(topic);
    setBookData([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (userQuery === "") {
      return;
    }

    const searchData = async () => {
      try {
        setIsLoading(true);
        SetError(false);

        const bookResponse = await fetchData(userQuery, page);
        setBookData((prevBooks) => [...prevBooks, ...bookResponse.items]);

        setHasMore(bookResponse.totalItems > 5 * page);
      } catch (error) {
        SetError(true);
      } finally {
        setIsLoading(false);
      }
    };

    searchData();
  }, [userQuery, page]);

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {bookData && <BookList booksArr={bookData} />}

      {isLoading && <p>Loading...</p>}
      {error && <p>Sorry! Smth went wrong</p>}
      {hasMore && <button onClick={handleLoadMore}>Load more</button>}
    </>
  );
}

export default App;
