import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) =>{
  console.log(props);
  return(
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilter} filters={props.filters}/>
      <FilteredFruitList updateFilterCallback={props.updateFilter} fruit={props.fruit} filter={props.currentFilter}/>
    </div>
  )

}

FruitBasket.defaultProps={
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
