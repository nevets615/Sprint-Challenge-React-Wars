import React from "react";
import'./StarWars.css';
function Character(props) {
  return (
    <div className="Character-card">
      <div className="Characters-info">
        <h3>{props.starwarsChars.name}</h3>
        <p>Gender: {props.starwarsChars.gender}</p>
        <p>Created in :{props.starwarsChars.created}</p>
      </div>
    </div>
  );
}

export default Character;
