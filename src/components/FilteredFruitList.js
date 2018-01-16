import React from 'react';

const FilteredFruitList = ({ fruit, filter}) => {
  const fruitList = !filter || filter === 'all' ? fruit : fruit.filter(fruit => fruit.fruit_type === filter)

  console.log(fruitList)
  return (
    <div>
      <ul className="fruit-list">
        {fruitList.map((fruit, i) => <li key={i}>{fruit.char}</li> )}
      </ul>
    </div>
  )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
