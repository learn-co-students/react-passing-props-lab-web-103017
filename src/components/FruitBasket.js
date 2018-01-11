import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  console.log("fruitbasket props are", props)
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     filters: [],
  //     selectedFilter: null
  //   };
  // }

  // handleFilterChange = event => {
  //   console.log('new filter: ', event.target.value);
  //   this.setState({ selectedFilter: event.target.value });
  // }
    return (
      <div className="fruit-basket">
        <Filter handleChange={props.handleFilterChange} filters={props.filters}/>
        <FilteredFruitList
          filter={props.selectedFilter} fruit={props.items} />
      </div>
    );

}
FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: 'all',
  updateFilterCallback: null

}
//currentFruits={props.currentFruits}
export default FruitBasket;
