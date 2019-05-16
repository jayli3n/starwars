# [StarWars DB](https://jayli3n.github.io/starwars/ "starwars")
`Live:` https://jayli3n.github.io/starwars/

A fun & light-weight web app to display all the Star Wars data you'll ever want!

This is just a side project to familiarize myself with `React.js`. 

To complete this without the hassel of worrying about CSS, I used a node package called `tachyons` toolkit to help with the styling.

## Info
- Star Wars data are retrieved from API: https://swapi.co/
- Deployed this `React.js` app onto GitHub using NPM `gh-pages`
	Read: https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d

## Features & Code Snippets
Below are some of the features and code extracts of this coding exercise.



### AJAX Loading:
----
Clicking on the category loads data from the star wars API, 10 items at a time. Each load appends to a data list stored in the component&apos;s `state` for display.

[![ajax loading](https://github.com/jayli3n/starwars/blob/master/README_resources/gif01.gif?raw=true "ajax loading")](https://github.com/jayli3n/starwars/blob/master/README_resources/gif01.gif?raw=true "ajax loading")

##### javascript:
```javascript
onBtnClick = (event) => {
  this.setState({data: []});
  this.setState({total: 0});
  this.setState({done_loading: false});
  const btn_id = parseInt(event.target.id, 10);

  const fetchEverything = (param) => {
    
      const fetch2 = (url) => {
        return new Promise((resolve, reject) => {
          fetch(url).then(resp => resp.json()).then(swapi => {
            this.setState({data: this.state.data.concat(swapi.results)});
            this.setState({total: swapi.count});
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
      fetch2(param).then(() => this.setState({done_loading: true}))
      .catch(err => console.log('An error has occurred: ', err))
      .finally(() => this.setState({done_loading: true}));
  }
  fetchEverything(this.urls[btn_id]);
}
```


### Dynamic Search:
----
The search field narrows down results immediately by using `array.filter()` to filter through the full list of star wars data first before feeding the list to CardList component to display.

Converting star wars data and user entered string to lowercase allows more accurate comparison.

[![dynamic search](https://github.com/jayli3n/starwars/blob/master/README_resources/gif03.gif?raw=true "dynamic search")](https://github.com/jayli3n/starwars/blob/master/README_resources/gif03.gif?raw=true "dynamic search")

##### javascript:
```javascript
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
```


### Scroll View Component:
----
The list of Cards are contained in a reusable ScrollView Component. 
By using `{props.children}`, ScrollView automatically takes into context what to render inside it.

[![scrollview component](https://github.com/jayli3n/starwars/blob/master/README_resources/gif02.gif?raw=true "scrollview component")](https://github.com/jayli3n/starwars/blob/master/README_resources/gif02.gif?raw=true "scrollview component")

##### javascript:
```javascript
import React from 'react';

const ScrollView = (props) => {
	return(
		<div className= 'pa3' style={{overflowY: 'scroll', border: '3px solid black', height: '800px'}}>
			{props.children}
		</div>
	)
}

export default ScrollView;
```

## NPM Dev Packages:
```json
"devDependencies": {
    "tachyons": "^4.11.1"
  }
```