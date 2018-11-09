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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getMovieInfo = this.getMovieInfo.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    //const imdbID = e.target.getAttribute('imdbid');
    //console.log(e.target, imdbID);
  }

  openModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  closeModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }
  addToFavorites(e) {
    console.log(e.target.value);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.getMovies();
    this.getMovieInfo();
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="title">Welcome to WDI Movie App</header>
        <Search
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          value={this.state.query}
        />
        <Movies
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
