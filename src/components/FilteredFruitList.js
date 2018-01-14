import React from 'react';

const FilteredFruitList = props => {

  const list = !props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
  const items = list.map((fruit, index) => <li key={index}>{fruit.char}</li>)

  return (
    <ul className="fruit-list">
      {items}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
