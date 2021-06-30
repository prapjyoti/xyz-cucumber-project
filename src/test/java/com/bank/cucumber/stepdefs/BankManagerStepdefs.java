package com.bank.cucumber.stepdefs;

import com.bank.pages.AddCustomerPage;
import com.bank.pages.BankManagerLoginPage;
import com.bank.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BankManagerStepdefs {
    @Given("^I am on xyz bank home page$")
    public void iAmOnXyzBankHomePage() {
    }

    @And("^I click on bank manager login tab$")
    public void iClickOnBankManagerLoginTab() {
        new HomePage().clickOnBankManagerLoginLink();

    }

    @And("^I click on add customer link$")
    public void iClickOnAddCustomerLink() {
        new BankManagerLoginPage().clickOnAddToCustomerLink();
    }

    @When("^I enter first name\"([^\"]*)\"$")
    public void iEnterFirstName(String firstname) {
        new AddCustomerPage().enterFirstNameField(firstname);

    }

    @And("^I enter last name\"([^\"]*)\"$")
    public void iEnterLastName(String lastname)  {
        new AddCustomerPage().enterListNameField(lastname);
    }


    @And("^I enter post code\"([^\"]*)\"$")
    public void iEnterPostCode(String postcode)  {
        new AddCustomerPage().enterPostCodeField(postcode);

    }

    @And("^I click on customer login tab$")
    public void iClickOnCustomerLoginTab() {
        new AddCustomerPage().clickOnAddToCustomerButton();
    }

    @Then("^I add customer Successfully$")
    public void iAddCustomerSuccessfully() {
        String actualMessage = new AddCustomerPage().verifyPopUpMessage();
        Assert.assertTrue(actualMessage.contains("Customer added successfully"));
    }

    @And("^I verify message successfully$")
    public void iVerifyMessageSuccessfully() {
        new AddCustomerPage().clickOnPopUpButton();
    }


}
