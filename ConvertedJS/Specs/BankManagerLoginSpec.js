"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomePage_1 = require("../Pages/HomePage");
var BankManagerPage_1 = require("../Pages/BankManagerPage");
var protractor_1 = require("protractor");
describe('Bank Manager Section in XYZ Bank', function () {
    var hp = new HomePage_1.HomePage();
    var bmp = new BankManagerPage_1.BankManagerPage();
    beforeEach(function () {
        protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    }); /*
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
    it('Verify open account', function () {
        hp.ClickBankManagerLogin();
        bmp.SelectOpenAccounttab();
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(bmp.btnProcess), 3000);
        expect(bmp.btnProcess.isDisplayed()).toBeTruthy();
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
//# sourceMappingURL=BankManagerLoginSpec.js.map