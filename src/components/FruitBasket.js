import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {

    return (
      <div className="fruit-basket">
        <Filter handleChange={props.handleFilter} filters={props.filters}/>
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
