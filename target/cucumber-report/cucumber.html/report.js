$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/banktest.feature");
formatter.feature({
  "line": 1,
  "name": "xyz bank functionality test",
  "description": "\r\nAs a user I want to check bank functionality.",
  "id": "xyz-bank-functionality-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17124521100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify that bank manager should add customer successfully",
  "description": "",
  "id": "xyz-bank-functionality-test;verify-that-bank-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on xyz bank home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on bank manager login tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on add customer link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter first name\"Shivansh\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter last name\"Prajapati\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter post code\"Ha0 1BJ\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on customer login tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I add customer Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify message successfully",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerStepdefs.iAmOnXyzBankHomePage()"
});
formatter.result({
  "duration": 1677658200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1555289500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnAddCustomerLink()"
});
formatter.result({
  "duration": 384207000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shivansh",
      "offset": 19
    }
  ],
  "location": "BankManagerStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 557904400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prajapati",
      "offset": 18
    }
  ],
  "location": "BankManagerStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 255263400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ha0 1BJ",
      "offset": 18
    }
  ],
  "location": "BankManagerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 296468900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 382873200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iAddCustomerSuccessfully()"
});
formatter.result({
  "duration": 66412200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iVerifyMessageSuccessfully()"
});
formatter.result({
  "duration": 32714900,
  "status": "passed"
});
formatter.after({
  "duration": 1751115900,
  "status": "passed"
});
formatter.before({
  "duration": 9229369200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that bankmanager should a open a account",
  "description": "",
  "id": "xyz-bank-functionality-test;verify-that-bankmanager-should-a-open-a-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    },
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on xyz bank home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on bank manager login tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on add customer link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter first name\"Shivansh\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter last name\"Prajapati\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter post code\"Ha0 1BJ\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on customer login tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I add customer Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I verify message successfully",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select name of customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select currency from list \u003c\"2\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on process button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should verify popup",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I accept the popup",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerStepdefs.iAmOnXyzBankHomePage()"
});
formatter.result({
  "duration": 67700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1262172900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnAddCustomerLink()"
});
formatter.result({
  "duration": 1018783000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shivansh",
      "offset": 19
    }
  ],
  "location": "BankManagerStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 461769900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prajapati",
      "offset": 18
    }
  ],
  "location": "BankManagerStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 264582100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ha0 1BJ",
      "offset": 18
    }
  ],
  "location": "BankManagerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 213666300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 156668100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iAddCustomerSuccessfully()"
});
formatter.result({
  "duration": 16334800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iVerifyMessageSuccessfully()"
});
formatter.result({
  "duration": 26943500,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 130837800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 42
    }
  ],
  "location": "OpenAccountStepdefs.iSelectNameOfCustomerFromDropdown(int)"
});
formatter.result({
  "duration": 1084062900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "OpenAccountStepdefs.iSelectCurrencyFromList(int)"
});
formatter.result({
  "duration": 242217000,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 167424400,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iShouldVerifyPopup()"
});
formatter.result({
  "duration": 530363800,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iAcceptThePopup()"
});
formatter.result({
  "duration": 21839000,
  "status": "passed"
});
formatter.after({
  "duration": 1627379600,
  "status": "passed"
});
formatter.before({
  "duration": 8671425300,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify that customer should login and logout successfully",
  "description": "",
  "id": "xyz-bank-functionality-test;verify-that-customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on xyz bank home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on bank manager login tab",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on add customer link",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter first name\"Shivansh\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I enter last name\"Prajapati\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter post code\"Ha0 1BJ\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on customer login tab",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add customer Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I verify message successfully",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I select name of customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I select currency from list \u003c\"2\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on process button",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I should verify popup",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I accept the popup",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on home page",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click on customer login link",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I select the existing customer from dropdown\u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click on loginlink",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I verify the logout button displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I verify the logout message successfully",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I verify text your name \"Your Name\"",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "I get the text of your name",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on home page",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerStepdefs.iAmOnXyzBankHomePage()"
});
formatter.result({
  "duration": 35600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1080817800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnAddCustomerLink()"
});
formatter.result({
  "duration": 324643600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shivansh",
      "offset": 19
    }
  ],
  "location": "BankManagerStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 657456900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prajapati",
      "offset": 18
    }
  ],
  "location": "BankManagerStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 312627800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ha0 1BJ",
      "offset": 18
    }
  ],
  "location": "BankManagerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 293907200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 191403200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iAddCustomerSuccessfully()"
});
formatter.result({
  "duration": 149964900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iVerifyMessageSuccessfully()"
});
formatter.result({
  "duration": 31897300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 153909300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 42
    }
  ],
  "location": "OpenAccountStepdefs.iSelectNameOfCustomerFromDropdown(int)"
});
formatter.result({
  "duration": 899116900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "OpenAccountStepdefs.iSelectCurrencyFromList(int)"
});
formatter.result({
  "duration": 256036200,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 250625300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iShouldVerifyPopup()"
});
formatter.result({
  "duration": 521717900,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iAcceptThePopup()"
});
formatter.result({
  "duration": 17143100,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnHomePage()"
});
formatter.result({
  "duration": 157431800,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 115534600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 46
    }
  ],
  "location": "LoginAndLogOutTest.iSelectTheExistingCustomerFromDropdown(int)"
});
formatter.result({
  "duration": 733341300,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnLoginlink()"
});
formatter.result({
  "duration": 129365300,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iVerifyTheLogoutButtonDisplayed()"
});
formatter.result({
  "duration": 93211800,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iVerifyTheLogoutMessageSuccessfully()"
});
formatter.result({
  "duration": 604205800,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 140395500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Name",
      "offset": 25
    }
  ],
  "location": "LoginAndLogOutTest.iVerifyTextYourName(String)"
});
formatter.result({
  "duration": 84631900,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iGetTheTextOfYourName()"
});
formatter.result({
  "duration": 564686500,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnHomePage()"
});
formatter.result({
  "duration": 97768500,
  "status": "passed"
});
formatter.after({
  "duration": 1476982200,
  "status": "passed"
});
formatter.before({
  "duration": 7981846900,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "verify that customer should be able to deposit money successfully",
  "description": "",
  "id": "xyz-bank-functionality-test;verify-that-customer-should-be-able-to-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "I am on xyz bank home page",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "I click on bank manager login tab",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click on add customer link",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I enter first name\"Shivansh\"",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I enter last name\"Prajapati\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I enter post code\"Ha0 1BJ\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on customer login tab",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I add customer Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I verify message successfully",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I click on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I select name of customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I select currency from list \u003c\"2\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I click on process button",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I should verify popup",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "I accept the popup",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click on home page",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "I click on customer login link",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I select the existing customer from dropdown\u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click on loginlink",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click on deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I deposit \"100\" money in to the account",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on confirm deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I verify the message that deposit money successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "I click on home page",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerStepdefs.iAmOnXyzBankHomePage()"
});
formatter.result({
  "duration": 40300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 646648500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnAddCustomerLink()"
});
formatter.result({
  "duration": 407327700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shivansh",
      "offset": 19
    }
  ],
  "location": "BankManagerStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 707354600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prajapati",
      "offset": 18
    }
  ],
  "location": "BankManagerStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 614010600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ha0 1BJ",
      "offset": 18
    }
  ],
  "location": "BankManagerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 270797100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 222991900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iAddCustomerSuccessfully()"
});
formatter.result({
  "duration": 17660800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iVerifyMessageSuccessfully()"
});
formatter.result({
  "duration": 38681500,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 242355400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 42
    }
  ],
  "location": "OpenAccountStepdefs.iSelectNameOfCustomerFromDropdown(int)"
});
formatter.result({
  "duration": 673355200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "OpenAccountStepdefs.iSelectCurrencyFromList(int)"
});
formatter.result({
  "duration": 262501600,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 139286500,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iShouldVerifyPopup()"
});
formatter.result({
  "duration": 515737600,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iAcceptThePopup()"
});
formatter.result({
  "duration": 37471400,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnHomePage()"
});
formatter.result({
  "duration": 203230900,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 121520600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 46
    }
  ],
  "location": "LoginAndLogOutTest.iSelectTheExistingCustomerFromDropdown(int)"
});
formatter.result({
  "duration": 575864000,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnLoginlink()"
});
formatter.result({
  "duration": 156716100,
  "status": "passed"
});
formatter.match({
  "location": "DepositAmoutTest.iClickOnDepositTab()"
});
formatter.result({
  "duration": 304751600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 11
    }
  ],
  "location": "DepositAmoutTest.iDepositMoneyInToTheAccount(int)"
});
formatter.result({
  "duration": 680002700,
  "status": "passed"
});
formatter.match({
  "location": "DepositAmoutTest.iClickOnConfirmDepositButton()"
});
formatter.result({
  "duration": 106499900,
  "status": "passed"
});
formatter.match({
  "location": "DepositAmoutTest.iVerifyTheMessageThatDepositMoneySuccessfully()"
});
formatter.result({
  "duration": 606193500,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnHomePage()"
});
formatter.result({
  "duration": 105469500,
  "status": "passed"
});
formatter.after({
  "duration": 1307085000,
  "status": "passed"
});
formatter.before({
  "duration": 8869323700,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "Verify that customer should withdraw money successfully",
  "description": "",
  "id": "xyz-bank-functionality-test;verify-that-customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 93,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "I am on xyz bank home page",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "I click on bank manager login tab",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I click on add customer link",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I enter first name\"Shivansh\"",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "I enter last name\"Prajapati\"",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I enter post code\"Ha0 1BJ\"",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click on customer login tab",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I add customer Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "I verify message successfully",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I click on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I select name of customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I select currency from list \u003c\"2\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I click on process button",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "I should verify popup",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "I accept the popup",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I click on home page",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "I click on customer login link",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I select the existing customer from dropdown\u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I click on loginlink",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I click on deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I deposit \"100\" money in to the account",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I click on confirm deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I verify the message that deposit money successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "I click on withdrawal button",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "I  enter \"50\" amount of withdrawal",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I click on confirm withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I verify the message that transaction successfully done",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerStepdefs.iAmOnXyzBankHomePage()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 661782400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnAddCustomerLink()"
});
formatter.result({
  "duration": 312931500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shivansh",
      "offset": 19
    }
  ],
  "location": "BankManagerStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 677084600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prajapati",
      "offset": 18
    }
  ],
  "location": "BankManagerStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 934159200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ha0 1BJ",
      "offset": 18
    }
  ],
  "location": "BankManagerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 380211200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 156191100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iAddCustomerSuccessfully()"
});
formatter.result({
  "duration": 18030900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iVerifyMessageSuccessfully()"
});
formatter.result({
  "duration": 21169500,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 176602900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 42
    }
  ],
  "location": "OpenAccountStepdefs.iSelectNameOfCustomerFromDropdown(int)"
});
formatter.result({
  "duration": 773812400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "OpenAccountStepdefs.iSelectCurrencyFromList(int)"
});
formatter.result({
  "duration": 292918300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 132220300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iShouldVerifyPopup()"
});
formatter.result({
  "duration": 517456800,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iAcceptThePopup()"
});
formatter.result({
  "duration": 21872800,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnHomePage()"
});
formatter.result({
  "duration": 160776300,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 108846200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 46
    }
  ],
  "location": "LoginAndLogOutTest.iSelectTheExistingCustomerFromDropdown(int)"
});
formatter.result({
  "duration": 672774400,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogOutTest.iClickOnLoginlink()"
});
formatter.result({
  "duration": 242662000,
  "status": "passed"
});
formatter.match({
  "location": "DepositAmoutTest.iClickOnDepositTab()"
});
formatter.result({
  "duration": 239475500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 11
    }
  ],
  "location": "DepositAmoutTest.iDepositMoneyInToTheAccount(int)"
});
formatter.result({
  "duration": 698968100,
  "status": "passed"
});
formatter.match({
  "location": "DepositAmoutTest.iClickOnConfirmDepositButton()"
});
formatter.result({
  "duration": 111325800,
  "status": "passed"
});
formatter.match({
  "location": "DepositAmoutTest.iVerifyTheMessageThatDepositMoneySuccessfully()"
});
formatter.result({
  "duration": 557511400,
  "status": "passed"
});
formatter.match({
  "location": "WithdrwalAmountTest.iClickOnWithdrawalButton()"
});
formatter.result({
  "duration": 610601900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 10
    }
  ],
  "location": "WithdrwalAmountTest.iEnterAmountOfWithdrawal(int)"
});
formatter.result({
  "duration": 759275500,
  "status": "passed"
});
formatter.match({
  "location": "WithdrwalAmountTest.iClickOnConfirmWithdrawalButton()"
});
formatter.result({
  "duration": 135926100,
  "status": "passed"
});
formatter.match({
  "location": "WithdrwalAmountTest.iVerifyTheMessageThatTransactionSuccessfullyDone()"
});
formatter.result({
  "duration": 595055500,
  "status": "passed"
});
formatter.after({
  "duration": 1617317700,
  "status": "passed"
});
});