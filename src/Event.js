import React, { Component } from 'react';

class Event extends Component {

  state = {
    collapsed: true
  }

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { collapsed } = this.state;
    return <div>
      <h2 className="summary"></h2>
      <p className="startdate"></p>
      <p className="location"></p>
      <button className="details-button" onClick={this.handleClick}></button>

      {!collapsed &&
        <div className="event-details">
          <h3>About Event:</h3>
          <p className="description"></p>
          <button className="hide-details-button" onClick={this.handleClick}></button>
        </div>
      }
    </div>;
  }
}

export default Event;