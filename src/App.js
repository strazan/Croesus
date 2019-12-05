import React, { Component } from "react";
import SearchStock from "./components/search/SearchStock";
import Footer from "./components/Footer";
import Stock from "./components/Stock";

class App extends Component {
  state = {};

  setActiveStock = (stock)  => {
    this.setState({ activeStock: stock });
  }

  render() {
    return (
      <div className="bg-gray-900">
        <SearchStock setStock={this.setActiveStock} />
        <Stock stock={this.state.activeStock} />
        <Footer />
      </div>
    );
  }
}

export default App;
