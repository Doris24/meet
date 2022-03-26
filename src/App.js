import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken } from './api';
import './nprogress.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    errorText: '',
    currentLocation: 'all'
  }

  //load events when the app loads
  async componentDidMount() {

    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });


      // this.mounted = true; //
      // getEvents().then((events) => {
      //   if (this.mounted) {
      //     this.setState({
      //       events,
      //       locations: extractLocations(events)
      //     });
      //   }
      // });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, newNum) => {
    // this.setState({
    //   errorText: '',
    //   numberOfEvents: newNum,
    // });
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

  updateNumberOfEvents = newNum => {
    // const newNum = e.target.value ? parseInt(e.target.value) : 32;
    // if (newNum < 1 || newNum > 32) {
    //   return this.setState({
    //     errorText: 'Please choose a number between 1 and 32.',
    //     numberOfEvents: 0,
    //   });
    // } else {
    this.setState({
      errorText: '',
      numberOfEvents: newNum,
    });
    //   this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);

    // }
    this.updateEvents(this.state.currentLocation, newNum);
  };




  render() {
    return (
      <div className="App">

        <h1>Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;