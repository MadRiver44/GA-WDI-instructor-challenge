import React from 'react';

const Movie = props => {
  const { id, imdbID, title, poster, getMovieInfo, addToFavorites } = props;
  return (
    <li className="movie" id={id}>
      <img srcSet={poster} alt={title} imdbid={imdbID} selector="on" />

      <div className="movie-item-container">
        <p>{title}</p>
        <button className="button-small" onClick={getMovieInfo}>
          {' '}
          FAV
        </button>
      </div>
    </li>
  );
};

export default Movie;
