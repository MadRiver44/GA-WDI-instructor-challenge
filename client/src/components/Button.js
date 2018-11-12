import React from 'react';

// Stateless Functional component
// This handles our event handler to trigger getMovies()
const Button = props => {
  const { handleClick } = props;
  return (
    <button className="button" onClick={handleClick} type="submit">
      Search
    </button>
  );
};

export default Button;

