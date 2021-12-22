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
        <input
          className="number-input"
          type="text"
          value={this.state.number}
          onChange={this.handleInputChange}
        >
        </input>

      </div>
    )
  }
}

export default NumberOfEvents;