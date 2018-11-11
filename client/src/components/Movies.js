import React from 'react';
import Movie from './Movie';

// Movies is simply a Stateless Functional Component, it is the same as a
// funtion where the arguments passed are props

// Now there is no real functionality, <Movies /> only returns a list of
// <Movie /> componnets and does'nt use any of the props itself.
// This is perfect use case for React's Context API!!!
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

