Feature: xyz bank functionality test

  As a user I want to check bank functionality.

@Smoke@Sanity@Regression
  Scenario: Verify that bank manager should add customer successfully
    Given I am on xyz bank home page
    And   I click on bank manager login tab
    And   I click on add customer link
    When  I enter first name"Shivansh"
    And   I enter last name"Prajapati"
    And   I enter post code"Ha0 1BJ"
    And   I click on customer login tab
    Then  I add customer Successfully
    And   I verify message successfully
@Sanity@Regression
  Scenario: Verify that bankmanager should a open a account
    Given I am on xyz bank home page
    And   I click on bank manager login tab
    And   I click on add customer link
    When  I enter first name"Shivansh"
    And   I enter last name"Prajapati"
    And   I enter post code"Ha0 1BJ"
    And   I click on customer login tab

    Then  I add customer Successfully
    And   I verify message successfully
    And   I click on open account tab
    And   I select name of customer from dropdown <"6">
    And   I select currency from list <"2">
    When  I click on process button
    Then  I should verify popup
    And   I accept the popup

@Regression
  Scenario: Verify that customer should login and logout successfully
    Given I am on xyz bank home page
    And   I click on bank manager login tab
    And   I click on add customer link
    When  I enter first name"Shivansh"
    And   I enter last name"Prajapati"
    And   I enter post code"Ha0 1BJ"
    And   I click on customer login tab

    Then  I add customer Successfully
    And   I verify message successfully
    And   I click on open account tab
    And   I select name of customer from dropdown <"6">
    And   I select currency from list <"2">
    When  I click on process button
    Then  I should verify popup
    And   I accept the popup

    When I click on home page
    And  I click on customer login link
    And  I select the existing customer from dropdown<"6">
    And I click on loginlink
    Then I verify the logout button displayed
    And I verify the logout message successfully
    And I click on logout button
    Then I verify text your name "Your Name"
    And I get the text of your name
    And I click on home page
@Regression
  Scenario: verify that customer should be able to deposit money successfully
    Given I am on xyz bank home page
    And   I click on bank manager login tab
    And   I click on add customer link
    When  I enter first name"Shivansh"
    And   I enter last name"Prajapati"
    And   I enter post code"Ha0 1BJ"
    And   I click on customer login tab

    Then  I add customer Successfully
    And   I verify message successfully
    And   I click on open account tab
    And   I select name of customer from dropdown <"6">
    And   I select currency from list <"2">
    When  I click on process button
    Then  I should verify popup
    And   I accept the popup

    When I click on home page
    And  I click on customer login link
    And  I select the existing customer from dropdown<"6">
    And I click on loginlink
    And I click on deposit tab
    And I deposit "100" money in to the account
    And I click on confirm deposit button
    Then I verify the message that deposit money successfully
    And I click on home page

  @Regression
  Scenario: Verify that customer should withdraw money successfully
    Given I am on xyz bank home page
    And   I click on bank manager login tab
    And   I click on add customer link
    When  I enter first name"Shivansh"
    And   I enter last name"Prajapati"
    And   I enter post code"Ha0 1BJ"
    And   I click on customer login tab

    Then  I add customer Successfully
    And   I verify message successfully
    And   I click on open account tab
    And   I select name of customer from dropdown <"6">
    And   I select currency from list <"2">
    When  I click on process button
    Then  I should verify popup
    And   I accept the popup

    When I click on home page
    And  I click on customer login link
    And  I select the existing customer from dropdown<"6">
    And I click on loginlink
    And I click on deposit tab
    And I deposit "100" money in to the account
    And I click on confirm deposit button
    Then I verify the message that deposit money successfully

    When I click on withdrawal button
    And  I  enter "50" amount of withdrawal
    And I click on confirm withdrawal button
    Then I verify the message that transaction successfully done













