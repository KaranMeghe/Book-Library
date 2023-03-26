import { useState } from "react";
const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleForm}>
      <label>Title</label>
      <input value={title} className="input" onChange={handleChange} />
      <button className="button is-primary">save</button>
    </form>
  );
};

export default BookEdit;
