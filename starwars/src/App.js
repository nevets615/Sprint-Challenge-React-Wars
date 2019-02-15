import React, { Component } from 'react';
import './App.css';

class starwarsChars extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: starwarsChars,
      birth_year: "",
      created: "",
      edited: "",
      eye_color: "",
      films: "",
      gender: "",
      hair_color: "",
      height: "",
      homeworld: "",
      mass:"",
      name: "",
      skin_color: "",
      species: "",
      starships: "",
      url: "",
      vehicles: ""
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
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
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Character/>
        <CharacterForm
           birth_year: {this.state.birth_year}
           created: {this.state.created}
           edited: {this.state.edited}
           eye_color: {this.state.eye_color}
           films: {this.state.films}
           gender: {this.state.gender}
           hair_color: {this.state.hair_color}
           height: {this.state.height}
           homeworld: {this.state.homeworld}
           mass: {this.state.mass}
           name: {this.state.name}
           skin_color: {this.state.skin_color}
           species: {this.state.species}
           starships: {this.state.starships}
           url: {this.state.url}
           vehicles: {this.state.vehicles}
           />
      </div>
    );
  }
}

export default App;











