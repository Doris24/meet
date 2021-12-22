import React, { Component } from 'react';

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: []
  }

  // // alternative:
  // constructor() {
  //   super();

  //   this.state = {
  //     query: ''
  //   }
  // }

  handleInputChanged = (event) => {
    const value = event.target.value; //read input value
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    }); //update State of query to value
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    });
  }

  render() {
    return (
      <div className="CitySeach" >
        <input
          type="text"
          className="city"
          value={this.state.query} //set to current state
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li key='all'>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;