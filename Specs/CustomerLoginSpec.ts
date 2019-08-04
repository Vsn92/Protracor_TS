import { browser, ExpectedConditions } from "protractor";
import { CustomerLoginPage } from "../Pages/CustomerLoginPage";
import { HomePage } from "../Pages/HomePage";
import { CommonPage } from "../Pages/CommonPage";
import { UtilityClass } from "../Utilities/UtilityClass";
import { CustomerPage } from "../Pages/CustomerPage";

describe('Customer Section in XYZ Bank',()=>{
    let clp=new CustomerLoginPage();
    let hp=new HomePage();
    let cp=new CommonPage();
    let cusp=new CustomerPage();
    let UserName='Harry Potter';
    beforeEach(()=>{
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        //browser.driver.manage().window().maximize();
        hp.ClickCustomerLogin();
    });
    it('Verify the Customer Login',()=>{
        expect(clp.ddCustomerName.isDisplayed()).toBeTruthy();
        UtilityClass.takeScreenshot('Customer Login Page after Load');
        clp.SelectCustomer(UserName);
        browser.wait(ExpectedConditions.visibilityOf(clp.btnLogin),10000);
        expect(clp.btnLogin.isDisplayed()).toBeTruthy();
        UtilityClass.takeScreenshot('Customer Login Page after Cust Selection');
        clp.ClickLogin();
        expect(cp.btnLogout.isDisplayed()).toBeTruthy();
        UtilityClass.takeScreenshot('Cusomer Page after Login');

        expect<any>(cusp.lblUserName.getText()).toBe(UserName);
    });
    it('Verify Account Details',()=>{
        clp.PerformLogin(UserName);
        browser.wait(ExpectedConditions.visibilityOf(cp.btnLogout),3000);
        expect<any>(cusp.lblUserName.getText()).toBe(UserName);
        cusp.SelectAccountNumber('1004');
        
        browser.wait(ExpectedConditions.textToBePresentInElement(cusp.lblAccountNumber,'1004'),3000);
        expect<any>(cusp.lblBalance.getText()).toBe('0');
        expect<any>(cusp.lblCurrency.getText()).toBe('Dollar');
        UtilityClass.takeScreenshot('Account 1004 Details');
        cusp.SelectAccountNumber('1005');
        browser.wait(ExpectedConditions.textToBePresentInElement(cusp.lblAccountNumber,'1005'),3000);
        expect<any>(cusp.lblBalance.getText()).toBe('0');
        expect<any>(cusp.lblCurrency.getText()).toBe('Pound');
        UtilityClass.takeScreenshot('Account 1005 Details');
        cusp.SelectAccountNumber('1006');
        browser.wait(ExpectedConditions.textToBePresentInElement(cusp.lblAccountNumber,'1006'),3000);
        expect<any>(cusp.lblBalance.getText()).toBe('0');
        expect<any>(cusp.lblCurrency.getText()).toBe('Rupee');
        UtilityClass.takeScreenshot('Account 1006 Details');
    });
    
   
    it('Verify the Deposit',()=>{
        clp.PerformLogin(UserName);
        expect<any>(cusp.lblUserName.getText()).toBe(UserName);
        cusp.SelectAccountNumber('1004');
        cusp.SelectDepositTab();
        browser.wait(ExpectedConditions.visibilityOf(cusp.btnDeposit),3000);
        cusp.EnterAmount('20000');
        cusp.ClickDeposit();
        expect<any>(cusp.lblBalance.getText()).toBe('20000');
        expect<any>(cusp.lblMessage.getText()).toBe('Deposit Successful');
        UtilityClass.takeScreenshot('After Deposit');
    });
    it('Verify the wihdrawal',()=>{
        clp.PerformLogin(UserName);
        cusp.SelectAccountNumber('1005');
        cusp.PerformDeposit('15000');
        cusp.SelectWithdrawalTab();
        browser.wait(ExpectedConditions.visibilityOf(cusp.btnDeposit),3000);
        cusp.EnterAmount('10000');
        cusp.ClickWithdraw();
        expect<any>(cusp.lblBalance.getText()).toBe('5000');
        expect<any>(cusp.lblMessage.getText()).toBe('Transaction successful');
        UtilityClass.takeScreenshot('After Successfull Withdrawal');

    });
    it('Verify Failed Transacion',()=>{
        clp.PerformLogin(UserName);
        cusp.SelectAccountNumber('1005');
        //cusp.PerformDeposit('15000');
        cusp.PerformWihdrawal('40000');
        expect<any>(cusp.lblMessage.getText()).toContain('Transaction Failed');
        UtilityClass.takeScreenshot('After Failed Withdrawal');
    });
    it('Verify Logout',()=>{
        clp.PerformLogin(UserName);
        cp.ClickLogout();
        expect(cp.btnLogout.isDisplayed()).toBeFalsy();
        UtilityClass.takeScreenshot('After Logout');
    });
});