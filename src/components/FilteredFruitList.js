import React from 'react';

const FilteredFruitList = props => {
  const fruitList = !props.filter ?  props.fruit : props.fruit.filter(item => item.fruit_type === props.filter);
  console.log(fruitList)
  return (
    <ul className="fruit-list">
      {fruitList.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}


FilteredFruitList.defaultProps = {
  fruit: [],
  filter: []
}

export default FilteredFruitList;
