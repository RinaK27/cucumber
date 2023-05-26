Feature: Cinema tests

    Scenario: happy test, should to make a reservation ticket
        Given user opens the site
        When user clicks on tomorrow
        When user clicks on available time
        When user clicks in available seat
        When user clicks on button
        Then user goes to the payment page

    Scenario: happy test, should to make a reservation tickets
        Given user is on page
        When user clicks on the day after the current day
        When user clicks on active time
        When user clicks on empty seat
        When user clicks in another one available seat
        When user click on button
        Then user moves to the payment page

    Scenario: sad test, should not reservation not available seat
        Given user opens the page
        When user clicks on next day
        When user clicks on 10 am
        When user clicks on seat
        When user presses the button for reservation
        When user presses the button for code
        When user comes back for reservation page
        When user clicks again on seat
        When user presses again the button for reservation
        Then user stays on the current page