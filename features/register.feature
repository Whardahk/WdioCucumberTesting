Feature: Para Bank Register Feature

  Scenario Outline: As a new customer, I can register into the Para Bank Website
    Given I am on the register page
    When I register with <firstName> and <lastName>
    Then I should see a text saying <message>

    Examples: 
      | username        | password | message           |
      | pp              | pp       | Accounts Overview |
      | invalidUsername | password | Error!            |
