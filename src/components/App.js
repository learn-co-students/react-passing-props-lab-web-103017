import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{
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

 handleFilter = event => {
  this.setState({ currentFilter: event.target.value });

}


  render(){

    return (<FruitBasket
                handleFilter={this.handleFilter}
                filters={this.state.filters}
                selectedFilter={this.state.currentFilter}
                items={this.state.fruit}
           />)
  }

}
/*const App = () => <FruitBasket />;
{name: "melon", keywords: Array(3), char: "🍈", fitzpatrick_scale: false, fruit_type: "berry"}
*/

export default App;
