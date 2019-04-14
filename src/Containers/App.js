/**
Written by Jay Li: https://github.com/jayli3
*/

import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import ScrollView from '../Components/ScrollView';
import Buttons from '../Components/Buttons';

const API_ADDR = 'https://swapi.co/api/';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      search_field: '',
      loading: false
    }
    this.urls = []

    fetch(API_ADDR).then(resp => resp.json()).then(results => {
      this.urls = [
        results.planets,
        results.starships,
        results.vehicles,
        results.people,
        results.films,
        results.species
      ];
    })
  }

  onSearchChange = (event) => {
    this.setState({search_field: event.target.value});
  }

  onBtnClick = (event) => {
    this.setState({loading: true});
    this.setState({data: []});
    const btn_id = parseInt(event.target.id, 10);

    const fetchEverything = (param) => {
      return new Promise((resolve, reject)=>{
        const fetch2 = (url) => {
          return new Promise((resolve, reject) => {
            fetch(url).then(resp => resp.json()).then(swapi => {
              this.setState({data: this.state.data.concat(swapi.results)});
              if(swapi.next === null){
                resolve();
              }
              else{
                fetch2(swapi.next).then(resolvee => {
                  resolve(resolvee);
                });
              }
            })
          })
        }
        fetch2(param).then(() => {
          this.setState({loading: false})
          });
      })
    }

    fetchEverything(this.urls[btn_id]).then(data_set => {
        this.setState({data: data_set});
      })
  }

  componentDidMount(){
    
  }

  render() {
    let filteredItems = this.state.data.filter(item => {
      if(typeof item.name !== "undefined"){
        return item.name.toLowerCase().includes(this.state.search_field.toLowerCase());
      }
      else if(typeof item.title !== "undefined"){
        return item.title.toLowerCase().includes(this.state.search_field.toLowerCase());
      }
      else{
        return {};
      }
    })

    return (
      <div className="tc f5">
        <h1 id='title'>Star Wars DB</h1>
        <Buttons btnClick={this.onBtnClick}/>
        <SearchBox searchChange={this.onSearchChange}/>
        <ScrollView>
        	<CardList items={filteredItems}/>
        </ScrollView>
      </div>
    )
  }
}

export default App;
