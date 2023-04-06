import { useState } from "react";
import useBooksContext from "../hooks/useBooksCntext";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  const handleForm = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onClick={handleForm}>
        <label>Title:</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default BookCreate;
