import React, { useState } from "react";
import { books } from "../mocks/books";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Función para filtrar libros por cualquier propiedad
  const filteredBooks = books.filter((book) => {
    const searchText = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText) ||
      book.year.toString().includes(searchText) ||
      book.isbn10.includes(searchText) ||
      book.isbn13.includes(searchText) ||
      book.category.toLowerCase().includes(searchText) ||
      book.language.toLowerCase().includes(searchText) ||
      book.synopsis.toLowerCase().includes(searchText) ||
      book.reviews.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="container">
      <h1 className="my-4">Biblioteca Online</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default Home;
