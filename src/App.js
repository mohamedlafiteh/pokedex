import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
class App extends React.Component {
  logWhenClicked = () => {
    console.log("it doesn't matter what the message is");
  };
  render() {
    return (
      <div>
        <Logo appName="Pokedex" handleClick={this.logWhenClicked} />
        <BestPokemon mentors={["Nate", "Islam", "Cris", "Diego"]} />
        <Greeting />
        <Name />
        <CaughtPokemon />
      </div>
    );
  }
}

class Greeting extends React.Component {
  render() {
    return <span> Hi my name is </span>;
  }
}

class Name extends React.Component {
  render() {
    return <span>Mohamed</span>;
  }
}

export default App;
