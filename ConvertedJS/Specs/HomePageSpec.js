"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomePage_1 = require("../Pages/HomePage");
var protractor_1 = require("protractor");
var CommonPage_1 = require("../Pages/CommonPage");
var UtilityClass_1 = require("../Utilities/UtilityClass");
describe("Homepage of XYZ Bank", function () {
    var hp = new HomePage_1.HomePage();
    var cp = new CommonPage_1.CommonPage();
    beforeEach(function () {
        protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        //browser.driver.manage().window().maximize();
    });
    it('Verify the Homepage Title and Buttons', function () {
        expect(cp.lblPageHeader.getText()).toEqual('XYZ Bank');
        expect(cp.btnHome.isDisplayed()).toBeTruthy();
        expect(hp.btnCustomerLogin.isDisplayed()).toBeTruthy();
        expect(hp.btnBankManagerLogin.isDisplayed()).toBeTruthy();
        UtilityClass_1.UtilityClass.takeScreenshot('Home Page');
    });
});
//# sourceMappingURL=HomePageSpec.js.map