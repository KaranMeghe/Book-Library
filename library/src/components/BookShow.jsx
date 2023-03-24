const BookShow = ({ book }) => {
  return (
    <div className="book-show">
      <h1>Book Name : {book.title}</h1>
      <h2>Book id: {book.id}</h2>
    </div>
  );
};

export default BookShow;
