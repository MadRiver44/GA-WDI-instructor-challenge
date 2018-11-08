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
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getMovieInfo = this.getMovieInfo.bind(this);
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
    console.log(e.target.getAttribute('imdbid'));
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
          items={this.state.data}
          getMovieData={this.getMovieData}
          addToFavorites={this.addToFavorites}
        />
      </div>
    );
  }
}

export default App;
