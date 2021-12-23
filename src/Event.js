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
    const { event } = this.props;
    const { collapsed } = this.state;
    return <div className="event">
      <h2 className="summary">{event.summary}</h2>
      <p className="startdate">{new Date(event.start.dateTime).toString()}</p>
      {/* <p className="startdate">{event.start.dateTime} {event.start.timeZone}</p> */}
      <p className="location">{event.location}</p>
      {/* test collapsed ??? */}
      {collapsed &&
        <button className="details-button" onClick={this.handleClick}>Show Details</button>
      }


      {!collapsed &&
        <div className="event-details">
          <h3>About Event:</h3>
          <p className="description">{event.description}</p>
          <button className="hide-details-button" onClick={this.handleClick}>Hide Details</button>
        </div>
      }
    </div>;
  }
}

export default Event;