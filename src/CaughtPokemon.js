import React from "react";

class CaughtPokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      caughtPokemon: 0
    };
  }

  catchPokemon = props => {
    this.setState(prevState => {
      return {
        caughtPokemon: prevState.caughtPokemon + 1
      };
    });
  };

  render() {
    return (
      <p>
        Caught {this.state.caughtPokemon} Pokemon on{" "}
        {new Date().toLocaleDateString()}
        <button onClick={this.catchPokemon}>Catch Pokemon</button>
      </p>
    );
  }
}

export default CaughtPokemon;
