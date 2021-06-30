package com.bank.cucumber.stepdefs;

import com.bank.pages.AccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class DepositAmoutTest {
    @And("^I click on deposit tab$")
    public void iClickOnDepositTab() {
        new AccountPage().clickOnDepositTab();
    }

    @And("^I deposit \"([^\"]*)\" money in to the account$")
    public void iDepositMoneyInToTheAccount(int amount) throws InterruptedException {
        Thread.sleep(500);
        new AccountPage().depositMoney(amount);

    }

    @And("^I click on confirm deposit button$")
    public void iClickOnConfirmDepositButton() {
        new AccountPage().clickOnDepositDepositTab();
    }

    @Then("^I verify the message that deposit money successfully$")
    public void iVerifyTheMessageThatDepositMoneySuccessfully() throws InterruptedException {
        Thread.sleep(500);
        String expectedMessage2 = "Deposit Successful";
        String actualMessage2 = new AccountPage().getMessageToVerifyDeposit();
        Assert.assertEquals(actualMessage2, expectedMessage2);
    }
}
