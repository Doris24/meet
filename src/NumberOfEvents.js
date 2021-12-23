import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    number: 32,
  }

  handleInputChange = (event) => {
    const newNumber = event.target.value;
    this.setState({
      number: newNumber
    })
  }

  render() {
    return (
      <div className="numberofevents">
        <label>Number of Events: </label>
        <input
          className="number-input"
          type="number"
          value={this.state.number}
          onChange={this.handleInputChange}
        >
        </input>

      </div>
    )
  }
}

export default NumberOfEvents;