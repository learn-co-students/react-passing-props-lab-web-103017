import React from 'react';

import FruitBasket from './FruitBasket';
// import Filter from './Filter';
// import FilteredFruitList from './FilteredFruitList.js';

class App extends React.Component{

  constructor(){
    super()
    this.state={
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit()
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit: items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters:filters }));
  }

  updateFilter = (event) => {
    console.log('new filter: ', event.target.value);

    this.setState({ currentFilter: event.target.value });
    console.log(this.state.currentFilter);
  }

  render(){
    return(
        <FruitBasket
        updateFilter={this.updateFilter}
        filters={this.state.filters}
        fruit={this.state.fruit}
        currentFilter={this.state.currentFilter}/>
    )
  }

}

export default App;
