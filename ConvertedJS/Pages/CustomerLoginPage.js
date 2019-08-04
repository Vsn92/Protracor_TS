"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CommonPage_1 = require("./CommonPage");
var CustomerLoginPage = /** @class */ (function () {
    function CustomerLoginPage() {
        this.ddCustomerName = protractor_1.element(protractor_1.by.model('custId'));
        this.optCustomers = protractor_1.element.all(protractor_1.by.repeater('cust in Customers'));
        this.btnLogin = protractor_1.element(protractor_1.by.buttonText('Login'));
    }
    CustomerLoginPage.prototype.SelectCustomer = function (name) {
        this.optCustomers.each(function (option) {
            option.getText().then(function (str) {
                if (str == name)
                    option.click();
            });
        });
    };
    CustomerLoginPage.prototype.ClickLogin = function () {
        this.btnLogin.click();
    };
    CustomerLoginPage.prototype.PerformLogin = function (name) {
        this.SelectCustomer(name);
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.btnLogin), 10000);
        this.ClickLogin();
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(new CommonPage_1.CommonPage().btnLogout), 3000);
    };
    return CustomerLoginPage;
}());
exports.CustomerLoginPage = CustomerLoginPage;
//# sourceMappingURL=CustomerLoginPage.js.map