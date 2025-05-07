import React from "react";

const SearchInput = ({ onSearchChange, searchText }) => {
  const handleChange = (event) => {
    const newText = event.target.value;
    onSearchChange(newText);
  };
  return (
    <input
      className="input"
      value={searchText}
      onChange={handleChange}
      placeholder="Поиск..."
    />
  );
};

export default SearchInput;
