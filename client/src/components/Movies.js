import React from 'react';
import Movie from './Movie';

const Movies = props => {
  const { items, getMovieInfo, addToFavorites, isOpen, toggleModal, closeModal, modalData } = props;
  const listItems = items.map((item, id) => (
    <Movie
      key={id}
      id={id}
      imdbID={item.imdbID}
      title={item.Title}
      poster={item.Poster}
      getMovieInfo={getMovieInfo}
      addToFavorites={addToFavorites}
      imdbid={item.imdbID}
      isOpen={isOpen}
      toggleModal={toggleModal}
      closeModal={closeModal}
      modalData={modalData}
    />
  ));
  return <ul id="movie-container">{listItems}</ul>;
};

export default Movies;

