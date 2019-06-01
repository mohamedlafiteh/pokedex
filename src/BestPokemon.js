import React from "react";

class BestPokemon extends React.Component {
  render() {
    return (
      <div>
        <p> The Mentors Name:</p>
        <ol>
          {this.props.mentors.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default BestPokemon;
