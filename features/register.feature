Feature: Para Bank Register Feature

  Scenario Outline: As a new customer, I can register into the Para Bank Website
    Given I am on the register page
    When I register with <firstName> and <lastName> and <address> and <city> and <state> and <zipCode> and <phone> and <ssn> and <username> and <password> and <confirmPassword>
    Then I should see a text on the Register result saying <message>

    Examples: 
      | firstName | lastName | address   | city     | state     | zipCode | phone      | ssn | username | password | confirmPassword | message                       |
      | whardah   | ksm      | sesame st | semarang | indonesia |    3000 | 0172637291 | 123 | whardah  | pass     | pass            | Welcome whardah               |
      | wehak     | ksm      | sesame st | semarang | indonesia |    3000 | 0172637291 | 123 | wehak    | pass     | password        | Passwords did not match.      |
      | wehak     | ksm      | sesame st | semarang | indonesia |    3000 | 0172637291 | 123 | whardah  | pass     | pass            | This username already exists. |
