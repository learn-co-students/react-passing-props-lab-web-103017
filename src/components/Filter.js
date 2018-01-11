import React, { Component } from 'react';

const Filter = props => {


  // componentWillMount() {
  //   this.fetchFilters();
  // }
  //
  // fetchFilters = () => {
  //   fetch('/api/fruit_types')
  //     .then(response => response.json())
  //     .then(filters => this.setState({ filters }));
  // }
  console.log("props in Filter", props)
    return (
      <select onChange={props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
}
Filter.defaultProps = {
  filters: 'all',
  handleChange: null
}

export default Filter;
