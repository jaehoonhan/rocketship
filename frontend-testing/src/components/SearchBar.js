import React from "react";
import SearchField from "react-search-field";

const SearchBar = () => {
  return (
    <SearchField
    placeholder="Search..."
    searchText="This is initial search text"
    classNames="test-class"
    />
  );
}

export default SearchBar;
