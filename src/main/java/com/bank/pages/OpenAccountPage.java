package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class OpenAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(OpenAccountPage.class.getName());

    @FindBy(id = "userSelect")
    WebElement customerName;

    @FindBy(id = "currency")
    WebElement currencyTab;

    @FindBy(xpath = "//button[contains(text(),'Process')]")
    WebElement processButton;


    public void selectExistingCustomerNameFromDropdown(int value) {

        log.info("Click on Add to Button  : " + customerName.toString());
        clickOnElement(customerName);
        selectByIndexFromDropDown(customerName, value);

    }

    public void selectCurrencyFromList(int value) {

        log.info("select currency from drop down : " + currencyTab.toString());
        selectByIndexFromDropDown(currencyTab, value);

    }

    public void clickOnProcessButton() {

        log.info("Click on process Button  : " + processButton.toString());
        clickOnElement(processButton);

    }
}
