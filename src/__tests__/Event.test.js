import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event'

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  //basic
  test('renders summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });
  test('render start date and timezone', () => {
    expect(EventWrapper.find('.startdate')).toHaveLength(1);
  });
  test('render location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });
  // test('render description', () => {
  //   expect(EventWrapper.find('.description')).toHaveLength(1);
  // });
  test('render show/hide button', () => {
    expect(EventWrapper.find('.details-button')).toHaveLength(1);
  });

  //An event element is collapsed by default.
  test('render event is collapsed by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  //User can expand an event to see its details.
  test('render details when event is expanded', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find('.details-button').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  //User can collapse an event to hide its details.
  test('hide details when hide details button is clicked', () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find('.hide-details-button').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
    expect(EventWrapper.find('.description')).toHaveLength(0);
  });
});