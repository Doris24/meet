Feature: Specify Number Of Events

    Scenario: When user hasn’t specified a number, 32 is the default number.
        Given the user has not specified a number
        When the user views the main page
        Then the user should see a maximum of 32 events by default

    Scenario: User can change the number of events they want to see.
        Given the user has not specified a number
        When the user enters a preferred number into the Number of Events box
        Then the user can see the specified number of events displayed on the page