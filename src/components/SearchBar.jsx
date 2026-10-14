import React from "react";

function SearchBar({ query, setQuery }) {
  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;