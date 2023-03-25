import { BookCreate, BookList } from "./components";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  // const createBook = (title) => {
  //   const updatedBooks = [
  //     ...books,
  //     { id: Math.floor(Math.random() * 999), title },
  //   ];
  //   setBooks(updatedBooks);
  //   console.log(books);
  // };

  const createBook = (title) => {
    if (title.trim() !== "") {
      const updatedBooks = [
        ...books,
        { id: Math.floor(Math.random() * 999), title },
      ];
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
    <div className="App">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
