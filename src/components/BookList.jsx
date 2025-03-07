import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, isRentedPage = false }) => {
  return (
    <div className="row">
      {books.length === 0 ? (
        <p className="text-center">No hay libros disponibles.</p>
      ) : (
        books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <BookCard book={book} isRentedPage={isRentedPage} />
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
