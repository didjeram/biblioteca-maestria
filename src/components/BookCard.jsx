import React, { useContext } from "react";
import { RentalContext } from "../context/RentalContext";
import RentalButton from "./RentalButton";

const BookCard = ({ book, isRentedPage = false }) => {
  const { rentedBooks } = useContext(RentalContext);
  const isRented = rentedBooks.some((b) => b.id === book.id);

  return (
    <div className="card book">
      <img src={book.cover} alt={book.title} className="card-img-top book__image" />
      <div className="card-body book__body">
        <h5 className="book__title">{book.title}</h5>
        <p className="book__author"><strong>Autor:</strong> {book.author}</p>
        <p className="book__year"><strong>Año de publicación:</strong> {book.year}</p>
        <p className="book__isbn">
          <strong>ISBN-10:</strong> {book.isbn10} <br />
          <strong>ISBN-13:</strong> {book.isbn13}
        </p>
        <p className="book__category"><strong>Categoría:</strong> {book.category}</p>
        <p className="book__language"><strong>Idioma:</strong> {book.language}</p>
        <p className="book__synopsis"><strong>Sinopsis:</strong> {book.synopsis}</p>
        <p className="book__reviews"><strong>Críticas:</strong> {book.reviews}</p>

        <RentalButton book={book} isRented={isRentedPage || isRented} />
      </div>
    </div>
  );
};

export default BookCard;
