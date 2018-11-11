import React from 'react';
import Button from './Button';

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
