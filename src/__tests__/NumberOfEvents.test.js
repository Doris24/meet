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
    const number = { target: { value: 8 } };
    NumberOfEventsWrapper.find('.number-input').simulate('change', number);
    expect(NumberOfEventsWrapper.state('number')).toBe(8);
  });

});