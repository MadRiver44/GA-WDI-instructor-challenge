import React from 'react';

const Movies = props => {
  const { items } = props;
  const listItems = items.map((item, index) => (
    <ul className="item-container">
      <img key={item.imdbID} srcSet={item.Poster} alt={item.Title} />
      <li key={item.Website}>{item.Title}</li>
      <li key={item.Website}>{item.Website}</li>
    </ul>
  ));
  return <div id="movie-container">{listItems}</div>;
};

export default Movies;
