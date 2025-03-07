import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const RentalContext = createContext();

export const RentalProvider = ({ children }) => {
  const [rentedBooks, setRentedBooks] = useLocalStorage("rentedBooks", []);

  // Función para calcular la fecha de vencimiento (7 días desde hoy)
  const getDueDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toISOString().split("T")[0];
  };

  // Función para alquilar un libro
  const rentBook = (book) => {
    if (!rentedBooks.some((b) => b.id === book.id)) {
      setRentedBooks([...rentedBooks, { ...book, dueDate: getDueDate() }]);
    }
  };

  // Función para devolver un libro
  const returnBook = (bookId) => {
    setRentedBooks(rentedBooks.filter((book) => book.id !== bookId));
  };

  // Función para extender el alquiler 7 días más
  const extendRental = (bookId) => {
    setRentedBooks(
      rentedBooks.map((book) =>
        book.id === bookId
          ? { ...book, dueDate: extendDueDate(book.dueDate) }
          : book
      )
    );
  };

  // Función para calcular la nueva fecha de vencimiento
  const extendDueDate = (currentDueDate) => {
    const date = new Date(currentDueDate);
    date.setDate(date.getDate() + 7);
    return date.toISOString().split("T")[0];
  };

  return (
    <RentalContext.Provider value={{ rentedBooks, rentBook, returnBook, extendRental }}>
      {children}
    </RentalContext.Provider>
  );
};
