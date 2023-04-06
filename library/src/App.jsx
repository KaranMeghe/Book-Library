import { BookCreate, BookList } from "./components";
import { useEffect } from "react";
import useBooksContext from "./hooks/useBooksCntext";

function App() {
  const { fetchBooks } = useBooksContext();
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
