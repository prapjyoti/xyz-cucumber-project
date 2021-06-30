package com.bank.cucumber.stepdefs;

import com.bank.pages.AccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WithdrwalAmountTest {
    @When("^I click on withdrawal button$")
    public void iClickOnWithdrawalButton() throws InterruptedException {
        Thread.sleep(500);
        new AccountPage().clickToWithdrawalButton();
    }

    @And("^I  enter \"([^\"]*)\" amount of withdrawal$")
    public void iEnterAmountOfWithdrawal(int money) throws InterruptedException {
        Thread.sleep(500);
        new AccountPage().enterWithdrawalAmount(money);


    }

    @And("^I click on confirm withdrawal button$")
    public void iClickOnConfirmWithdrawalButton() {
        new AccountPage().clickOnWithdrawalFinalTab();
    }

    @Then("^I verify the message that transaction successfully done$")
    public void iVerifyTheMessageThatTransactionSuccessfullyDone() throws InterruptedException {
        Thread.sleep(500);
        String expectedMessage3 = "Transaction successful";
        String actualMessage3 = new AccountPage().getMessageToVerifyTransaction();
        Assert.assertEquals(actualMessage3, expectedMessage3);
    }
}
