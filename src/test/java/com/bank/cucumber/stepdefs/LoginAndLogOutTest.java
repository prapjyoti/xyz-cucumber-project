package com.bank.cucumber.stepdefs;

import com.bank.pages.CustomerLoginPage;
import com.bank.pages.HomePage;
import com.bank.pages.OpenAccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginAndLogOutTest {
    @When("^I click on home page$")
    public void iClickOnHomePage() {
        new HomePage().clickOnHomePage();
    }

    @And("^I click on customer login link$")
    public void iClickOnCustomerLoginLink() {
        new HomePage().clickOnCustomerLoginLink();
    }

    @And("^I select the existing customer from dropdown<\"([^\"]*)\">$")
    public void iSelectTheExistingCustomerFromDropdown(int value) {
        new OpenAccountPage().selectExistingCustomerNameFromDropdown(value);

    }

    @And("^I click on loginlink$")
    public void iClickOnLoginlink() {
        new CustomerLoginPage().clickOnLoginLink();
    }

    @Then("^I verify the logout button displayed$")
    public void iVerifyTheLogoutButtonDisplayed() {
        new CustomerLoginPage().verifyLogoutButtonDisplayed();
    }

    @And("^I verify the logout message successfully$")
    public void iVerifyTheLogoutMessageSuccessfully() throws InterruptedException {
        Thread.sleep(500);
        String expectedText = "Logout";
        String actualText = new CustomerLoginPage().getLogOutText();
        Assert.assertEquals(actualText, expectedText);

    }

    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new CustomerLoginPage().clickOnLogOutButton();

    }

    @Then("^I verify text your name \"([^\"]*)\"$")
    public void iVerifyTextYourName(String text) {
        new CustomerLoginPage().verifyTextYourName(text);

    }

    @And("^I get the text of your name$")
    public void iGetTheTextOfYourName() throws InterruptedException {
        Thread.sleep(500);
        String expectedVerify = "Your Name :";
        String actualVerify = new CustomerLoginPage().verifyToGetYourNameText();
        Assert.assertEquals(actualVerify, expectedVerify);

    }
}
