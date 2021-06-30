package com.bank.cucumber.stepdefs;

import com.bank.pages.AddCustomerPage;
import com.bank.pages.BankManagerLoginPage;
import com.bank.pages.OpenAccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class OpenAccountStepdefs {
    @And("^I click on open account tab$")
    public void iClickOnOpenAccountTab() {
        new BankManagerLoginPage().clickOnOpenAccountTab();

    }

    @And("^I select name of customer from dropdown <\"([^\"]*)\">$")
    public void iSelectNameOfCustomerFromDropdown(int value)  {
        new OpenAccountPage().selectExistingCustomerNameFromDropdown(value);


    }

    @And("^I select currency from list <\"([^\"]*)\">$")
    public void iSelectCurrencyFromList(int value)  {
       new OpenAccountPage().selectCurrencyFromList(value);
    }

    @When("^I click on process button$")
    public void iClickOnProcessButton() {
        new OpenAccountPage().clickOnProcessButton();
    }

    @Then("^I should verify popup$")
    public void iShouldVerifyPopup() throws InterruptedException {
        Thread.sleep(500);
        String actualMessage1 = new AddCustomerPage().verifyPopUpMessage();
       Assert.assertTrue(actualMessage1.contains("Account created successfully"));

    }

    @And("^I accept the popup$")
    public void iAcceptThePopup() {
        new AddCustomerPage().clickOnPopUpButton();
    }
}
