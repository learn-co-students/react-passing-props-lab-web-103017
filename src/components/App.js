import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }
  fetchFruits = () => {
  fetch('/api/fruit')
    .then(response => response.json())
    .then(items => this.setState({ fruit: items }));
  }

  // updateCurrentFruits = () => {
  //   let list = !this.state.filter || this.state.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.state.filter);
  //
  //   this.setState({currentFruits: list})
  // }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });

  }

render(){
  return (<FruitBasket handleFilterChange={this.handleFilterChange} filters={this.state.filters} selectedFilter={this.state.currentFilter} items={this.state.fruit} />)
}

}
//currentFruits={this.state.currentFruits}
export default App;
