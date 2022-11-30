Feature: Register a new username

  Scenario: register a new user with a valid username and password
     Given I go to registeration page
     When I enter valid username and password
     Then I should see the user is registered
