import { useState } from "react";
const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    onCreate(title);
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
