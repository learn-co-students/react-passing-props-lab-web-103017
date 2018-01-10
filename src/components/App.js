import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };

    //Can't do fetch in the constructor, virtual DOM must be built up, and must mount
  }

  handleFilterChange = event => {
    // console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  componentWillMount(){
    this.getFilters();
    this.getFruits();
  }

  getFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  getFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render(){
    const {fruit, filters, currentFilter} = this.state
    return(
      <FruitBasket fruit={fruit} filters={filters} selectedFilter={currentFilter} handleFilterChange={this.handleFilterChange}/>
    )
  }
}

// const App = () => <FruitBasket />;

export default App;
