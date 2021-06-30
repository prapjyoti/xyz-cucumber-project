package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BankManagerLoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(BankManagerLoginPage.class.getName());

    @FindBy(xpath = "//button[normalize-space()='Add Customer']")
    WebElement addCustomer;

    @FindBy(xpath = "//button[normalize-space()='Open Account']")
    WebElement openAccount;


    public void clickOnAddToCustomerLink() {

        clickOnElement(addCustomer);
        log.info("Click on Add to customer link  : " + addCustomer.toString());

    }

    public void clickOnOpenAccountTab() {

        clickOnElement(openAccount);
        log.info("Click on open account tab  : " + openAccount.toString());

    }


}
