import React, { Component } from "react";
import SearchItem from "./SearchItem";

export default class SearchResult extends Component {
  render() {
    let result = [];
    if (this.props.res) {
      this.props.res.forEach(type => {
        result.push(
          <h3 className="text-gray-200 pt-4 font-bold">
            {type.instrumentType}
          </h3>
        );
        result.push(
          type.hits.map(paper => (
            <SearchItem setStock={this.props.setStock} stock={paper} />
          ))
        );
      });
    }
    return result;
  }
}
