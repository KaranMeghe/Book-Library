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

  return (
    <div className="App">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
