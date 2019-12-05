import React, { Component } from "react";

export default class Stock extends Component {
//   state = {
//       isStockActive: false,

//   };

  render() {
    console.log(this.props.stock);
    let stockName = "";
    if (this.props.stock) {
      stockName = this.props.stock.link.linkDisplay;
    }
    return (
      <div className="p-8">
        <h2 className="text-white text-3xl">{stockName}</h2>
      </div>
    );
  }
}
