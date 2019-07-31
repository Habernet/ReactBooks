import React from "react";

const BookSearch = props => {
  return (
    <div className="book-search-container">
      <label for="site-search">Search the site:</label>
      <input
        type="search"
        id="site-search"
        name="q"
        aria-label="Search through site content"
      />
      <button>Search</button>
    </div>
  );
};

export default BookSearch;
