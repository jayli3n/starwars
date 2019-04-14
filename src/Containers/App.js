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

  componentDidMount(){
    const fetchEverything = (param) => {
      const fetch2 = (url, data = []) => {
        return new Promise((resolve, reject) => {
          fetch(url).then(resp => resp.json()).then(swapi => {
            data = data.concat(swapi.results);
            if(swapi.next === null){
              resolve(data);
            }
            else{
              fetch2(swapi.next, data).then(resolvee => {
                resolve(resolvee);
              });
            }
          })
        })
      }
      fetch2(param).then(data => {
        return data;
      });
    }

    const loadData = async () => {
      const resp = await fetch('https://swapi.co/api/');
      const data = await resp.json();
      const urls = [
        data.planets,
        data.starships,
        data.vehicles,
        data.people,
        data.films,
        data.species
      ];

      fetchEverything(urls[0]);
      // for (let i = 0; i < urls.length; i+=1){
      //   this.setState({data: this.state.data.concat(fetchEverything(urls[i]))});
      // }
    }
    loadData();
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
