import React, { Component } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";

class SearchStock extends Component {
  state = {
    searchResult: null,
    searchTerm: ""
  };
  componentDidMount() {}

  emptySearchBar = () => {

  }

  newSearchRequest = e => {
 
    axios
      .get(
        "https://limitless-garden-26844.herokuapp.com/https://www.avanza.se/_cqbe/search/global-search/global-search-template?query=" +
        e.target.value
      )
      .then(res => {
        this.setState({ searchResult: res.data.resultGroups });
      });
  };

  render() {
    
    return (
      <div className="p-8 pb-0">
        <div>
          <h3 className="text-white text-lg pb-2" >Search</h3>
          <input className="mb-4 bg-gray-300 border-solid border border-black" onChange={this.newSearchRequest} type="text" />
        </div>
        <SearchResult setStock={this.props.setStock} res={this.state.searchResult} />
      </div>
    );
  }
}

export default SearchStock;
