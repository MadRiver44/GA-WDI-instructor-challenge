import React, { Component } from 'react';
import './App.scss';
import Search from './components/Search';

const API = `http://www.omdbapi.com/?t=`;
const API_KEY = `apikey=21d400e3`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
    };

    /*this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);*/
  }

  render() {
    return (
      <div className="App">
        <header className="title">Welcome to WDI Movie App</header>
        <Search />
      </div>
    );
  }
}

export default App;
