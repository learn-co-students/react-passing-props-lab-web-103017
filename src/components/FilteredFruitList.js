import React, { Component } from 'react';

const FilteredFruitList = (props) => {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     items: []
  //   };
  // }

  // componentWillMount() {
  //   fetch('/api/fruit')
  //     .then(response => response.json())
  //     .then(items => this.setState({ items }));
  // }

    const list = !props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
    console.log("list is", list)

    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
  }

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: 'all'
}

export default FilteredFruitList;
