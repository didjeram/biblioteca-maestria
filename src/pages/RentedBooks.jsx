import React, { useContext } from "react";
import { RentalContext } from "../context/RentalContext";
import RentalList from "../components/RentalList";

const RentedBooks = () => {
  const { rentedBooks } = useContext(RentalContext);

  return (
    <div className="container">
      <h2 className="my-4">Mis Libros Alquilados</h2>
      <RentalList rentedBooks={rentedBooks} />
    </div>
  );
};

export default RentedBooks;
