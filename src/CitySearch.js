import React, { Component } from 'react';

import { InfoAlert } from './Alert';

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: ''
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
    this.setState({ showSuggestions: true }); //InfoAlert
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city',
      })
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      }); //update State of query to value

    }

  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });

    this.props.updateEvents(suggestion); //pass the clicked suggestion to updateEvents prop
  }

  render() {

    return (
      <div className="CitySeach" >
        <InfoAlert text={this.state.infoText} />
        <label className="label">Choose your nearest city:</label>
        <br />
        <input
          type="text"
          className="city"
          value={this.state.query} //set to current state
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true }) }}
        />
        {/* if showSuggestions is true, list will be vissible, otherwise, style won't have 'display: none', so list won't be visible */}
        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }} >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
          {/* <li key='all' onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default CitySearch;