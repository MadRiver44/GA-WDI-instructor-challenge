import React from 'react';
// import PropTypes from 'prop-types';

// stateless functional component
const Button = props => {
  const { handleClick } = props;
  return (
    <button className="button" onClick={handleClick} type="submit">
      Search
    </button>
  );
};

export default Button;

// Button.propTypes = {
//   handleClick: PropTypes.func.isRequired,
// };
