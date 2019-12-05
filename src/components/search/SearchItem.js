import React, { Component } from "react";
import SearchItemTodayChange from "./SearchItemTodayChange";

export default class SearchItem extends Component {

  render() {
    let shortName = "";
    if (this.props.stock.link.type === "STOCK") {
      shortName = this.props.stock.link.shortLinkDisplay;
    }
    ;
    return (
      <div onClick={() => {this.props.setStock(this.props.stock)}} className="flex text-white pt-1">
        <h2 className="w-24">{shortName}</h2>
        <h2 className="w-96 ml-10">{this.props.stock.link.linkDisplay}</h2>
        <SearchItemTodayChange
          todayChange={this.props.stock.todayChange}
        ></SearchItemTodayChange>
        <h2 className="w-32 ml-12 text-right">
          {`${this.props.stock.lastPrice} ${this.props.stock.currency}`}
        </h2>
      </div>
    );
  }
}
