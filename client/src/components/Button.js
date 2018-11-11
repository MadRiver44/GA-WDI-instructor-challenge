import React from 'react';

const Button = props => {
  const { handleClick } = props;
  return (
    <button className="button" onClick={handleClick} type="submit">
      Search
    </button>
  );
};

export default Button;

