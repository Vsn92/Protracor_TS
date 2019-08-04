"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CustomerLoginPage_1 = require("../Pages/CustomerLoginPage");
var HomePage_1 = require("../Pages/HomePage");
var CommonPage_1 = require("../Pages/CommonPage");
var UtilityClass_1 = require("../Utilities/UtilityClass");
var CustomerPage_1 = require("../Pages/CustomerPage");
describe('Customer Section in XYZ Bank', function () {
    var clp = new CustomerLoginPage_1.CustomerLoginPage();
    var hp = new HomePage_1.HomePage();
    var cp = new CommonPage_1.CommonPage();
    var cusp = new CustomerPage_1.CustomerPage();
    var UserName = 'Harry Potter';
    beforeEach(function () {
        protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        //browser.driver.manage().window().maximize();
        hp.ClickCustomerLogin();
    });
    it('Verify the Customer Login', function () {
        expect(clp.ddCustomerName.isDisplayed()).toBeTruthy();
        UtilityClass_1.UtilityClass.takeScreenshot('Customer Login Page after Load');
        clp.SelectCustomer(UserName);
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(clp.btnLogin), 10000);
        expect(clp.btnLogin.isDisplayed()).toBeTruthy();
        UtilityClass_1.UtilityClass.takeScreenshot('Customer Login Page after Cust Selection');
        clp.ClickLogin();
        expect(cp.btnLogout.isDisplayed()).toBeTruthy();
        UtilityClass_1.UtilityClass.takeScreenshot('Cusomer Page after Login');
        expect(cusp.lblUserName.getText()).toBe(UserName);
    });
    it('Verify Account Details', function () {
        clp.PerformLogin(UserName);
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(cp.btnLogout), 3000);
        expect(cusp.lblUserName.getText()).toBe(UserName);
        cusp.SelectAccountNumber('1004');
        protractor_1.browser.wait(protractor_1.ExpectedConditions.textToBePresentInElement(cusp.lblAccountNumber, '1004'), 3000);
        expect(cusp.lblBalance.getText()).toBe('0');
        expect(cusp.lblCurrency.getText()).toBe('Dollar');
        UtilityClass_1.UtilityClass.takeScreenshot('Account 1004 Details');
        cusp.SelectAccountNumber('1005');
        protractor_1.browser.wait(protractor_1.ExpectedConditions.textToBePresentInElement(cusp.lblAccountNumber, '1005'), 3000);
        expect(cusp.lblBalance.getText()).toBe('0');
        expect(cusp.lblCurrency.getText()).toBe('Pound');
        UtilityClass_1.UtilityClass.takeScreenshot('Account 1005 Details');
        cusp.SelectAccountNumber('1006');
        protractor_1.browser.wait(protractor_1.ExpectedConditions.textToBePresentInElement(cusp.lblAccountNumber, '1006'), 3000);
        expect(cusp.lblBalance.getText()).toBe('0');
        expect(cusp.lblCurrency.getText()).toBe('Rupee');
        UtilityClass_1.UtilityClass.takeScreenshot('Account 1006 Details');
    });
    it('Verify the Deposit', function () {
        clp.PerformLogin(UserName);
        expect(cusp.lblUserName.getText()).toBe(UserName);
        cusp.SelectAccountNumber('1004');
        cusp.SelectDepositTab();
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(cusp.btnDeposit), 3000);
        cusp.EnterAmount('20000');
        cusp.ClickDeposit();
        expect(cusp.lblBalance.getText()).toBe('20000');
        expect(cusp.lblMessage.getText()).toBe('Deposit Successful');
        UtilityClass_1.UtilityClass.takeScreenshot('After Deposit');
    });
    it('Verify the wihdrawal', function () {
        clp.PerformLogin(UserName);
        cusp.SelectAccountNumber('1005');
        cusp.PerformDeposit('15000');
        cusp.SelectWithdrawalTab();
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(cusp.btnDeposit), 3000);
        cusp.EnterAmount('10000');
        cusp.ClickWithdraw();
        expect(cusp.lblBalance.getText()).toBe('5000');
        expect(cusp.lblMessage.getText()).toBe('Transaction successful');
        UtilityClass_1.UtilityClass.takeScreenshot('After Successfull Withdrawal');
    });
    it('Verify Failed Transacion', function () {
        clp.PerformLogin(UserName);
        cusp.SelectAccountNumber('1005');
        //cusp.PerformDeposit('15000');
        cusp.PerformWihdrawal('40000');
        expect(cusp.lblMessage.getText()).toContain('Transaction Failed');
        UtilityClass_1.UtilityClass.takeScreenshot('After Failed Withdrawal');
    });
    it('Verify Logout', function () {
        clp.PerformLogin(UserName);
        cp.ClickLogout();
        expect(cp.btnLogout.isDisplayed()).toBeFalsy();
        UtilityClass_1.UtilityClass.takeScreenshot('After Logout');
    });
});
//# sourceMappingURL=CustomerLoginSpec.js.map