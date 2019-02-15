import React from "react";

function Character(props) {
  return (
    <div className="Character-card">
      <div className="Characters-info">
        <h3>{props.starwarsChars.name}</h3>
        <p>{props.starwarsChars.gender}</p>
        <p>{props.starwarsChars.homeworld}</p>
      </div>
    </div>
  );
}

export default Character;
