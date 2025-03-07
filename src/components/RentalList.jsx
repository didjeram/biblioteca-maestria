import React from "react";
import RentalItem from "./RentalItem";

const RentalList = ({ rentedBooks }) => {
  return (
    <div className="row">
      {rentedBooks.length === 0 ? (
        <p className="text-center">No tienes libros alquilados.</p>
      ) : (
        rentedBooks.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <RentalItem book={book} />
          </div>
        ))
      )}
    </div>
  );
};

export default RentalList;
