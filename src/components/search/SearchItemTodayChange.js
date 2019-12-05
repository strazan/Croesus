import React, { Component } from "react";

export default class SearchItemTodayChange extends Component {

  render() {
    let todayChange = this.props.todayChange;
    let todayChangeColor;

    if (todayChange === "0") {
      todayChangeColor = "text-white";
    } else if (todayChange[0] !== "-") {
      todayChange = `+${todayChange}`;
      todayChangeColor = "text-positive";
    } else {
      todayChangeColor = "text-negative";
    }

    return <h2 className={`w-24 ml-12 text-right ${todayChangeColor}`}>{`${todayChange}%`}</h2>;
  }
}
