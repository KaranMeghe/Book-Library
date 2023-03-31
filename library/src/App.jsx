import { BookCreate, BookList } from "./components";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    if (title.trim() !== "") {
      const response = await axios.post("http://127.0.0.1:3001/books", {
        title,
      });
      const updatedBooks = [...books, response.data];
      setBooks(updatedBooks);
    }
  };

  // const deleteBookById = (id) => {
  //   const updatedBooks = books.filter((book) => {
  //     return book.id !== id;
  //   });
  //   setBooks(updatedBooks);
  // };

  const deleteBookById = async (id) => {
    const reposnse = await axios.delete(`http://127.0.0.1:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
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
