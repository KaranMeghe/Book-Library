import { BookCreate, BookList } from "./components";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 999), title },
    ];
    setBooks(updatedBooks);
    console.log(books);
  };

  return (
    <div className="App">
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
