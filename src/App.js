import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    warningText: '',
    currentLocation: 'all',
    showWelcomeScreen: undefined
  }

  //load events when the app loads
  async componentDidMount() {

    this.mounted = true; //
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }

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
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App">
        <WarningAlert
          text={this.state.warningText} />
        <h1>Meet App</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents} />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList
          events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />

      </div>
    );
  }
}

export default App;