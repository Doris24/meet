import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user is on the main page', () => {
            AppWrapper = mount(<App />);
        });

        when('the user receives a list of upcoming events', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        then('the user should see a list of collapsed events', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user hasn’t selected an event', () => {
            AppWrapper = mount(<App />);
            expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });

        when('the user selects an event', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.details-btn')).toHaveLength(mockData.length);
            AppWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the user should see the more details for that event', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user has selected an event', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
            expect(AppWrapper.find('.event-details')).toHaveLength(1);
        });

        when('the user clicks the hide button of the event', () => {
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the user should see the collapsed version of the event', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });
});