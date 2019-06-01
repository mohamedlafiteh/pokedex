import React from "react";

class Logo extends React.Component {
  render() {
    const date = new Date();
    const hour = date.getHours();
    let newDate;
    if (hour > 24) {
      newDate = "Morning";
    } else if ((hour > 12) & (hour < 17)) {
      newDate = "Evening";
    } else {
      ("Night");
    }
    return (
      <div>
        <header>
          <h1>
            {" "}
            Good {newDate} world,this is {this.props.appName} App
          </h1>
          <img
            onClick={this.props.handleClick}
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          />
        </header>
      </div>
    );
  }
}

export default Logo;
