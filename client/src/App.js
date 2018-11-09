import React, { Component } from 'react';
import './App.scss';
import Search from './components/Search';
import Movies from './components/Movies';
//import axios from 'axios';

// const API = `http://www.omdbapi.com/?apikey=`;
// const API_KEY = `apikey=21d400e3`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      modalIsOpen: false,
      modalData: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getMovieInfo = this.getMovieInfo.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.viewFavorites = this.viewFavorites.bind(this);
  }

  getMovies() {
    fetch(`http://www.omdbapi.com/?s=${this.state.query}&apikey=21d400e3`)
      .then(res => res.json())
      .catch(error => {
        console.log('Error fetching data', error);
      })
      .then(res => {
        //console.log(res.Search);
        this.setState({ data: res.Search });
      });
  }

  getMovieInfo(e) {
    console.log('button is clicked');
    const imdbID = e.target.getAttribute('imdbid');
    console.log(e.target, imdbID, 'line43');
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=21d400e3`)
      .then(res => res.json())
      .then(res => {
        this.setState({ modalData: res });
      })
      .catch(err => {
        console.log(`${err}`);
      });
  }

  openModal(e) {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
    this.getMovieInfo(e);
  }

  closeModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }
  addToFavorites(e) {
    e.persist();
    let event = e.target;
    var id = e.target.id;
    fetch('/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.data[Number(id)]),
    });
  }

  viewFavorites(e) {
    e.persist();
    console.log('viewFavorites was clicked', e);
    fetch(`/favorites`)
      .then(res => res.json())
      .catch(error => {
        console.log('Error fetching data', error);
      })
      .then(jsonRes => {
        this.setState({ data: jsonRes });
      });
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.getMovies();
  }

  render() {
    return (
      <div className="App">
        <header className="title">Welcome to WDI Movie App</header>
        <h5 className="favorites" onClick={this.viewFavorites}>
          View Favorites
        </h5>
        <Search
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          value={this.state.query}
        />
        <Movies
          modalData={this.state.modalData}
          toggleModal={this.openModal}
          isOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          items={this.state.data}
          getMovieInfo={this.getMovieInfo}
          addToFavorites={this.addToFavorites}
        />
      </div>
    );
  }
}

export default App;
