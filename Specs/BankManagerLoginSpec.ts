import { HomePage } from "../Pages/HomePage";
import { BankManagerPage } from "../Pages/BankManagerPage";
import { browser, ExpectedConditions } from "protractor";
import { UtilityClass } from "../Utilities/UtilityClass";
import { Alert } from "selenium-webdriver";

describe('Bank Manager Section in XYZ Bank',()=>{
    let hp=new HomePage();
    let bmp=new BankManagerPage();
    beforeEach(()=>{
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    });/*
    it('Verify Bank Manager Login',()=>{
        hp.ClickBankManagerLogin();
        expect(bmp.btnAddCustomerTab.isDisplayed).toBeTruthy();
        expect(bmp.btnCustomersTab.isDisplayed).toBeTruthy();
        expect(bmp.btnOpenAccountTab.isDisplayed).toBeTruthy();
        UtilityClass.takeScreenshot('After Bank Manager Login');
    });
    it('Verify Add Customer',()=>{
        hp.ClickBankManagerLogin();
        bmp.SelectAddCustomerTab();
        browser.wait(ExpectedConditions.visibilityOf(bmp.btnAddCustomer),3000);
        expect<any>(bmp.btnAddCustomer.isDisplayed()).toBeTruthy();
        bmp.EnterFirstName('Santhosh');
        bmp.EnterLastName('Nagaraj');
        bmp.EnterPostalCode('568975896');
        bmp.ClickAddCustomer();
        /*browser.wait(ExpectedConditions.alertIsPresent(),5000);
        browser.driver.switchTo().alert().then((alert)=>{
            expect<any>(alert.getText()).toContain('Customer added successfully');
            UtilityClass.takeScreenshot('After Customer Creation');
            alert.accept();
        });*/
    //});
    it('Verify open account',()=>{
        hp.ClickBankManagerLogin();
        bmp.SelectOpenAccounttab();
        browser.wait(ExpectedConditions.visibilityOf(bmp.btnProcess),3000);
        expect<any>(bmp.btnProcess.isDisplayed()).toBeTruthy();
        bmp.SelectCustomer('Harry Potter');
        bmp.SelectCurrency('Dollar');
        bmp.ClickProcess();
        /*browser.wait(ExpectedConditions.alertIsPresent(),5000);
        browser.driver.switchTo().alert().then((alert)=>{
            expect<any>(alert.getText()).toContain('Account Created successfully');
            UtilityClass.takeScreenshot('After Customer Creation');
            alert.accept();
        });*/

    });
});