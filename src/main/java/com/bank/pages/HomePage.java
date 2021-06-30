package com.bank.pages;

import com.bank.utility.Utility;
import gherkin.formatter.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//button[contains(text(),'Customer Login')]")
    WebElement customerLogin;

    @FindBy(xpath = "//button[contains(text(),'Bank Manager Login')]")
    WebElement bankManagerLogin;
    //@FindBy(xpath = "//button[contains(text(),'Home')]")
    @FindBy(xpath = "//button[@class='btn home']")
    WebElement homePage;


    public void clickOnCustomerLoginLink() {
        clickOnElement(customerLogin);
        log.info("Click on Customer Login Link : " + customerLogin.toString());
    }

    public void clickOnBankManagerLoginLink() {

        clickOnElement(bankManagerLogin);
        log.info("Click On Bank Manager login link : " + bankManagerLogin.toString());
    }

    public void clickOnHomePage() {
        clickOnElement(homePage);
        log.info("Click on home page : " + homePage.toString());

    }

}
