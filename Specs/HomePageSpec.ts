import {HomePage} from '../Pages/HomePage';
import { browser } from 'protractor';
import { CommonPage } from '../Pages/CommonPage';
import { UtilityClass } from '../Utilities/UtilityClass';
describe("Homepage of XYZ Bank",()=>{
    let hp=new HomePage();
    let cp=new CommonPage();
    beforeEach(()=>{
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        //browser.driver.manage().window().maximize();
    })
    it('Verify the Homepage Title and Buttons',()=>{
       expect<any>(cp.lblPageHeader.getText()).toEqual('XYZ Bank');
       expect(cp.btnHome.isDisplayed()).toBeTruthy();
       expect(hp.btnCustomerLogin.isDisplayed()).toBeTruthy();
       expect(hp.btnBankManagerLogin.isDisplayed()).toBeTruthy();
       UtilityClass.takeScreenshot('Home Page');
    });
});