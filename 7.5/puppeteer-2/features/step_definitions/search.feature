Feature: Cinema tests

    Scenario: happy test, should to make a reservation ticket
        Given opens the site "http://qamid.tmweb.ru/client/index.php" page
        When user clicks on tomorrow
        When user clicks on available time
        When user clicks in available seat
        When user clicks on button
        Then user goes to the payment page

    Scenario: happy test, should to make a reservation tickets
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user clicks on the day after the current day
        When user clicks on active time
        When user clicks on empty seat
        When user clicks in another one available seat
        When user click on button
        Then user moves to the payment page "Вы выбрали билеты:"

    Scenario: sad test, should not reservation seats for unavailable vip seats
        Given user opens the page "http://qamid.tmweb.ru/client/index.php"
        When user clicks on next day
        When user clicks on 10 am
        When user click on occupied vip seat
        When user presses the button
        Then user stays on the current page