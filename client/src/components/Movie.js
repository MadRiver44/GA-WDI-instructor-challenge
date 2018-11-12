import React from 'react';
import Modal from './Modal';

/*
Another Stateless Functional Component, it get props from <Movies />
and returns a list item with data and event handlers from props.

We use React.Fragment because our <Movie /> returns multiple elements.
This is useful for performance reasons so we group
children without adding extra nodes to the DOM.
*/

const Movie = props => {
  const {
    id,
    imdbID,
    title,
    poster,
    getMovieInfo,
    addToFavorites,
    isOpen,
    toggleModal,
    closeModal,
    modalData,
  } = props;
  return (
    <React.Fragment>
      <li className="movie" id={id}>
        <img srcSet={poster} alt={title} imdbid={imdbID} />
        <div className="movie-title">{title}</div>
        <div className="button-container">
          <button
            type="submit"
            className="button-small"
            onClick={toggleModal}
            imdbid={imdbID}
            title={title}
            id={id}>
            {' '}
            Info!!
          </button>
          <button
            type="submit"
            className="button-small"
            onClick={addToFavorites}
            imdbid={imdbID}
            id={id}>
            {' '}
            Fav
          </button>
        </div>
      </li>
      <Modal className="modal" selector="#modal-root" isOpen={isOpen} onClick={closeModal}>
        <div className="modal-1">
          {' '}
          <h5>{modalData.Title}</h5>
          <div className="info">
            Year:<p>{modalData.Year}</p>
          </div>
          <div className="info">
            {' '}
            Rated:<p>{modalData.Rated}</p>
          </div>
          <div className="info">
            Actors:<p>{modalData.Actors}</p>
          </div>
          <div className="info">
            Director:<p>{modalData.Director}</p>
          </div>
          <div className="info">
            Genre:<p>{modalData.Genre}</p>
          </div>
          <div className="info">
            Imdb Rating:<p>{modalData.imdbRating}</p>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Movie;
