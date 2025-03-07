import React, { useContext } from "react";
import { RentalContext } from "../context/RentalContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RentalButton = ({ book, isRented }) => {
  const { rentBook, returnBook } = useContext(RentalContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      navigate("/login"); // Redirigir al login si no está autenticado
      return;
    }
    isRented ? returnBook(book.id) : rentBook(book);
  };

  return (
    <button
      className={`btn ${isRented ? "btn-danger" : "btn-primary"} rental-button`}
      onClick={handleClick}
    >
      {isRented ? "Devolver" : "Alquilar"}
    </button>
  );
};

export default RentalButton;
