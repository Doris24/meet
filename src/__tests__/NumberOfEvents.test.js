import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />)
  });

  test('render number of events input', () => {
    expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
  });



  //User can change the number of events they want to see.
  test('number of events displayed matches number', () => {
    const number = NumberOfEventsWrapper.prop('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(32);
  });

  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 0
    });
    const eventObject = { target: { value: 0 } }; //change when called
    NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject); //simulate a change of the city
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(0);
    expect(NumberOfEventsWrapper.find('.number-error-text').text()).toBe('Please choose a number between 1 and 32.');
  });

});