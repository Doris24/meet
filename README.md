# Meet App
## Project description
This is a serverless, progressive web application with React using test-driven development technique. The application uses the Google Calendar API to fetch upcoming events.

## Key Features
1. Filter events by city
2. Show/hide an event’s details
3. Specify number of events
4. Use the app when offline
5. View a chart showing the number of upcoming events by city

## User Stories:
* As a user, I should be able to filter events by city. So that I can see the list of events that take place in that city.
    * Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

    * Scenario 2: User should see a list of suggestions when they search for a city.

    * Scenario 3: User can select a city from the suggested list.

* As a user, I should be able to show/hide an event’s details. So that I can see the details of an event and get more information about it.
    * Scenario 1: An event element is collapsed by default.

    * Scenario 2: User can expand an event to see its details.

    * Scenario 3: User can collapse an event to hide its details.

* As a user, I should be able to specify the number of events. So that I can limit the number of events displayed.
    * Scenario 1: When user hasn’t specified a number, 32 is the default number.

    * Scenario 2: User can change the number of events they want to see.

* As a user, I should be able to use the app when offline. So that I can see the events I viewed the last time I was online.
    * Scenario 1: Show cached data when there’s no internet connection.
    
    * Scenario 2: Show error when user changes the settings (city, time range).

* As a user, I should be able to see a chart showing the upcoming events in each city. So that I can see what events are organized in which city.
    * Scenario 1: Show a chart with the number of upcoming events in each city.

## Technologies
* JavaScript
* React
* Amazon Web Services (AWS)
* Google Cloud Platform
* Puppeteer
* Jest
* Enzyme
* Recharts

## How to get the project running
1. Clone the repository
2. Install npm packages 
3. Start the app with ``npm run start``


