import React from 'react';

const Movie = props => {
  console.log(props);
  const { id, imdbID, title, poster, getMovieInfo, addToFavorites } = props;
  return (
    <li className="movie" id={id}>
      <img srcSet={poster} alt={title} imdbid={imdbID} selector="on" />
      <div className="movie-title">{title}</div>
      <button type="submit" className="button-small" onClick={getMovieInfo} imdbid={imdbID}>
        {' '}
        FAV
      </button>
    </li>
  );
};

export default Movie;
