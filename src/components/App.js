import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      currentFilter: null,
      filters: [],
      selectedFilter: null
    };

  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    // console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    // console.log("State", this.state);
    return <FruitBasket
            fruit={this.state.fruit}
            filters={this.state.filters}
            selectedFilter={this.state.currentFilter}
            handleFilterChange={this.handleFilterChange}
          />;
  }
}







export default App;
