import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import ScrollView from '../Components/ScrollView';
import Buttons from '../Components/Buttons';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      search_field: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({search_field: event.target.value});
    console.log(this.state.search_field);
  }

  render() {
    return (
      <div className="tc f4">
        <h1 id='title'>Star Wars DB</h1>
        <Buttons />
        <SearchBox searchChange={this.onSearchChange}/>
        <ScrollView>
        	<CardList />
        </ScrollView>
      </div>
    )
  }
}

export default App;
