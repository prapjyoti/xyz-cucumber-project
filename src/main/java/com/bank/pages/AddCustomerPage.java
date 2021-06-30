package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddCustomerPage extends Utility {

    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement firstName;

    @FindBy(xpath = "//input[@placeholder='Last Name']")
    WebElement lastName;

    @FindBy(xpath = "//input[@placeholder='Post Code']")
    WebElement postCode;

    @FindBy(xpath = "//button[@type='submit']")
    WebElement addCustomerButton;


    public void enterFirstNameField(String name) {

        sendTextToElement(firstName, name);
        log.info("Enter first name  : " + firstName + " to first name  field : " + firstName.toString());
    }


    public void enterListNameField(String name) {

        sendTextToElement(lastName, name);
        log.info("Enter  last name  : " + lastName + " to Last Name field : " + lastName.toString());

    }

    public void enterPostCodeField(String postcode) {

        sendTextToElement(postCode, postcode);
        log.info("Enter  postcode  : "  + postCode.toString());
    }

    public void clickOnAddToCustomerButton() {

        log.info("Click on Add to Button  : "  + addCustomerButton.toString());
        clickOnElement(addCustomerButton);


    }
    public String verifyPopUpMessage(){
        Alert alertDialog = driver.switchTo().alert();
        return alertDialog.getText();
    }
    public void  clickOnPopUpButton(){
        Alert alertDialogue = driver.switchTo().alert();
        alertDialogue.accept();
    }



}
