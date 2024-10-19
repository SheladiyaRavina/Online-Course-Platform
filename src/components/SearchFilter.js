// src/components/SearchFilter.js
import React from "react";

const SearchFilter = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Courses"
      className="border border-gray-300 p-2 rounded w-full mb-4"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchFilter;
