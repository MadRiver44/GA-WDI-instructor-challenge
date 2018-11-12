import React from 'react';
import Button from './Button';

// ES6 destructuring to make our life easier and iur code cleaner.
const Search = props => {
  const { query, handleChange, handleClick } = props;
  return (
    <div className="search-container">
      <form className="form-container">
        <label htmlFor="searchbar" />
        <input
          type="search"
          id="searchbar"
          placeholder="enter a movie title"
          value={query}
          onChange={handleChange}
        />
        <Button handleClick={handleClick} />
      </form>
    </div>
  );
};

export default Search;
