import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar mb-4">
      <input
        type="text"
        className="form-control search-bar__input"
        placeholder="Buscar en toda la biblioteca..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
