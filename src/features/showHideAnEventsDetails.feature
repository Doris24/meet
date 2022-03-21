Feature: Show/Hide an event's details

    Scenario: An event element is collapsed by default.
        Given the user is on the main page
        When the user receives a list of upcoming events
        Then the user should see a list of collapsed events

    Scenario: User can expand an event to see its details.
        Given the user hasn’t selected an event
        When the user selects an event
        Then the user should see the more details for that event

    Scenario: User can collapse an event to hide its details.
        Given the user has selected an event
        When the user clicks the hide button of the event
        Then the user should see the collapsed version of the event