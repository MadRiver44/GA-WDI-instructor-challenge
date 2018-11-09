import React from 'react';
import Movie from './Movie';

const Movies = props => {
  //console.log(props);
  const { items, getMovieInfo, addToFavorites } = props;
  const listItems = items.map((item, index) => (
    <Movie
      key={index}
      id={item.imdbID}
      title={item.Title}
      poster={item.Poster}
      getMovieInfo={getMovieInfo}
      addToFavorites={addToFavorites}
      imdbid={item.imdbID}
    />
  ));
  return <ul id="movie-container">{listItems}</ul>;
};

export default Movies;

/*   <ul className="item-container">
      <img key={item.imdbID} srcSet={item.Poster} alt={item.Title} onClick={getMovieData} />
      <li key={item.Website}>{item.Title}</li>
      <li key={item.Website}>{item.Website}</li>
    </ul>
  */
