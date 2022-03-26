import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api'; // , checkToken, getAccessToken
import './nprogress.css';
import { WarningAlert } from './Alert';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    //warningText: '',
    currentLocation: 'all'
  }

  //load events when the app loads
  async componentDidMount() {

    // no internet connection
    if (!navigator.onLine) {
      this.setState({
        warningText: 'The app is not connected to the internet.'
      });
    } else {
      this.setState({
        warningText: ''
      });
    }

    this.mounted = true; //
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, newNum) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
        ? events
        : events.filter((event) => event.location === location);

      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
        currentLocation: location,
      });
    });
  }

  updateNumberOfEvents = (newNum) => {
    this.setState({
      numberOfEvents: newNum
    });
    this.updateEvents(this.state.currentLocation, newNum);
  };


  render() {
    return (
      <div className="App">

        <h1>Meet App</h1>
        <WarningAlert text={this.state.warningText} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;