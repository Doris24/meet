import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user has not specified a number', () => {
            AppWrapper = mount(<App />);
        });

        when('the user views the main page', () => {
            AppWrapper.update();
        });

        then('the user should see a maximum of 32 events by default', (arg0) => {
            expect(AppWrapper.find('.event')).toHaveLength(32);
        });

    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user has not specified a number', () => {
            AppWrapper = mount(<App />);
        });

        when('the user enters a preferred number into the Number of Events box', () => {
            AppWrapper.find('.number-input').simulate('change', { target: { value: '3' } });
        });

        then('the user can see the specified number of events displayed on the page', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(3);
        });
    });
});