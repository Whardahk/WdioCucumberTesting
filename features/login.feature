Feature: Para Bank Login Feature

  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a text saying <message>

    Examples: 
      | username        | password | message           |
      | pp              | pp       | Accounts Overview |
      | invalidUsername | password | Error!            |
