import React, { Component } from 'react';

const FilteredFruitList = props => {


    const list = !props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
    console.log("list is", list)

    return (
      <ul className="fruit-list">
        {list.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
      </ul>
    );
  }

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: 'all'
}

export default FilteredFruitList;
