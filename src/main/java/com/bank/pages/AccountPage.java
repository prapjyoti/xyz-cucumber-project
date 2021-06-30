package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class AccountPage extends Utility {


    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    //store Transaction, deposit and withdraw.

    @FindBy(xpath = "//button[2][contains(text(),'Deposit')]")
    WebElement depositLink;

    @FindBy(xpath = "//div[@class='form-group']/input")
    WebElement depositAmount;

    @FindBy(xpath = "//form[@name='myForm']/button")
    WebElement clickDepositButton;

    @FindBy(xpath = "//span[@class='error ng-binding']")
    WebElement verifyDepositSuccessful;

    @FindBy(xpath = "//input[@placeholder='amount']")
    WebElement withdrawnAmount;

    @FindBy(xpath = "//button[@class='btn btn-default']")
    WebElement withdrawButton;

    @FindBy(xpath = "//span[@class='error ng-binding']")
    WebElement getTransactionText;

    @FindBy(xpath = "//button[contains(text(),'Withdrawl')]")
    WebElement withdrawalLink;


    //This method will click to deposit Tab
    public void clickOnDepositTab() {

        clickOnElement(depositLink);
        log.info("Clicking On Deposit Button :" + depositLink.toString());
    }

    //This method will deposit money
    public void depositMoney(int amount) {

        sendTextToElement(depositAmount, String.valueOf(amount));
        log.info("Enter a Amount :" + depositAmount.toString());
    }

    public void clickOnDepositDepositTab() {

        clickOnElement(clickDepositButton);
        log.info("Clicking On Deposit Tab :" + clickDepositButton.toString());
    }

    public String getMessageToVerifyDeposit() {

        log.info("get message to verify :" + verifyDepositSuccessful.toString());
        return getTextFromElement(verifyDepositSuccessful);

    }


    //This method will click on withdrawal btn
    public void clickToWithdrawalButton() {

        log.info("clicking on Withdrawal button :" + withdrawalLink.toString());
        clickOnElement(withdrawalLink);

    }

    //This method will withdrawal amount
    public void enterWithdrawalAmount(int withdrawal) {

        sendTextToElement(withdrawnAmount, String.valueOf(withdrawal));
        log.info("enter Withdrawal amount :" + withdrawnAmount.toString());

    }

    public void clickOnWithdrawalFinalTab() {

        clickOnElement(withdrawButton);
        log.info("clicking on Withdrawal :" + withdrawButton.toString());
    }

    public String getMessageToVerifyTransaction() {

        log.info("get message to verify :" + getTransactionText.toString());
        return getTextFromElement(getTransactionText);

    }

}

