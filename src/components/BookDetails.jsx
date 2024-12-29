const BookDetails = ({ book }) => (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      {/* Add other book details here */}
    </div>
  );