import React from "react";

import FruitBasket from "./FruitBasket";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    };
  }

  handleFilterChange = e => {
    console.log("new filter: ", e.target.value);
    this.setState({ selectedFilter: e.target.value });
  };

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit = () => {
    fetch("/api/fruit")
      .then(response => response.json())
      .then(items => this.setState({ fruit: items }));
  };

  fetchFilters = () => {
    fetch("/api/fruit_types")
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  };

  render() {
    return (
      <FruitBasket
        handleFilterChange={this.handleFilterChange}
        selectedFilter={this.state.currentFilter}
        filters={this.state.filters}
        items={this.state.fruit}
      />
    );
  }
}

export default App;
