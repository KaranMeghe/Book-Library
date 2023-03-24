const BookShow = ({ book, onDelete }) => {
  const handleClick = () => {
    onDelete(book.id);
  };

  return (
    <div className="book-show">
      <h1>Book Name : {book.title}</h1>
      <div className="actions">
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
