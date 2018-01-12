import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }


  render() {
    return (
      <FruitBasket updateFilterCallback={this.handleFilterChange} filters={this.state.filters} selectedFilter={this.state.currentFilter} fruit={this.state.fruit}/>
    )
  }
}

export default App;
