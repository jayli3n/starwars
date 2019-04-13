import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';

class App extends Component {
  render() {
    return (
      <div className="App tc">
        <h1>Star Wars DB</h1>
        <SearchBox />
        <CardList />
      </div>
    )
  }
}

export default App;
