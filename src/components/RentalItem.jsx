import React, { useContext } from "react";
import { RentalContext } from "../context/RentalContext";
import RentalButton from "./RentalButton";

const RentalItem = ({ book }) => {
  const { extendRental } = useContext(RentalContext);

  return (
    <div className="card rental-item">
      <img src={book.cover} alt={book.title} className="card-img-top rental-item__image" />
      <div className="card-body rental-item__body">
        <h5 className="rental-item__title">{book.title}</h5>
        <p className="rental-item__author"><strong>Autor:</strong> {book.author}</p>
        <p className="rental-item__year"><strong>Año de publicación:</strong> {book.year}</p>
        <p className="rental-item__isbn">
          <strong>ISBN-10:</strong> {book.isbn10} <br />
          <strong>ISBN-13:</strong> {book.isbn13}
        </p>
        <p className="rental-item__category"><strong>Categoría:</strong> {book.category}</p>
        <p className="rental-item__language"><strong>Idioma:</strong> {book.language}</p>
        <p className="rental-item__due-date"><strong>Fecha de vencimiento:</strong> {book.dueDate}</p>

        <div className="d-flex gap-2">
          <RentalButton book={book} isRented={true} />
          <button className="btn btn-warning" onClick={() => extendRental(book.id)}>
            Extender 7 días
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalItem;
