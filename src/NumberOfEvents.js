import React, { Component } from 'react';

import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: this.props.numberOfEvents || 32,
    errorText: ''
  }

  handleInputChange = (event) => {
    const newNumber = event.target.value;
    if (newNumber <= 0 || newNumber > 32) {
      return this.setState({
        numberOfEvents: newNumber,
        errorText: 'Please choose a number between 1 and 32.'
      });
    } else {
      this.setState({
        numberOfEvents: newNumber,
        errorText: ''
      });
      this.props.updateNumberOfEvents(event.target.value);
    }
  }

  render() {
    return (
      <div className="numberofevents">
        <label className="label">Number of Events: </label>
        <br />
        <input
          className="number-input"
          type="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChange}
        >
        </input>
        <ErrorAlert text={this.state.errorText} />
      </div>
    )
  }
}

export default NumberOfEvents;