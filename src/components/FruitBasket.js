import React  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

    return (
      <div className="fruit-basket">
        <Filter filters={props.filters} handleChange={props.handleFilterChange} />
        <FilteredFruitList
          fruit={props.fruit}
          filter={props.selectedFilter} />
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: [],
  updateFilterCallback: []
}

export default FruitBasket;
