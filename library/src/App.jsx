import { BookCreate, BookList } from "./components";
import { useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    if (title.trim() !== "") {
      const response = await axios.post(" http://127.0.0.1:3001/books", {
        title,
      });

      const updatedBooks = [...books, response.data];
      setBooks(updatedBooks);
    }
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
