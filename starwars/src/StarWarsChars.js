import React, { Component } from 'react';
import './App.css';
import Character from './components/Character'

class StarWarsChars extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div>
      <h1>Star Wars Characters:</h1>
      <div className="name-list">
      {this.state.starwarsChars.map((starwarsCharsFromMap, index) => (
          <Character key={index} starwarsChars={starwarsCharsFromMap} />
        ))}
      </div>
  </div>
    );
}
}
export default StarWarsChars;











