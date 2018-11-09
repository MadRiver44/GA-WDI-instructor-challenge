import React from 'react';
import Modal from './Modal';

const Movie = props => {
  console.log(props);
  const { id, imdbID, title, poster, getMovieInfo, addToFavorites, isOpen, toggleModal, closeModal } = props;
  console.log(isOpen);
  return (
    <React.Fragment>
      <li className="movie" id={id}>
        <img srcSet={poster} alt={title} imdbid={imdbID} selector="on" />
        <div className="movie-title">{title}</div>
        <button
          type="submit"
          className="button-small"
          onClick={(getMovieInfo, toggleModal)}
          imdbid={imdbID}
          title={title}
          id={id}>
          {' '}
          FAV
        </button>
      </li>
      <Modal className="modal" selector="#modal-root" isOpen={isOpen} onClick={closeModal}>
        <div className="modal-1">Modal 1 is open</div>
      </Modal>
    </React.Fragment>
  );
};

export default Movie;
