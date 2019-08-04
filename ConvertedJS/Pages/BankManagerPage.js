"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BankManagerPage = /** @class */ (function () {
    function BankManagerPage() {
        this.btnAddCustomerTab = protractor_1.element(protractor_1.by.buttonText('Add Customer'));
        this.btnCustomersTab = protractor_1.element(protractor_1.by.buttonText('Customers'));
        this.btnOpenAccountTab = protractor_1.element(protractor_1.by.buttonText('Open Account'));
        this.btnAddCustomer = protractor_1.element(protractor_1.by.css('.btn.btn-default'));
        this.btnProcess = protractor_1.element(protractor_1.by.buttonText('Process'));
        this.txtFirstName = protractor_1.element(protractor_1.by.model('fName'));
        this.txtLastName = protractor_1.element(protractor_1.by.model('lName'));
        this.txtPostalCode = protractor_1.element(protractor_1.by.model('postCd'));
        this.ddCustomerNames = protractor_1.element(protractor_1.by.model('custId'));
        this.ddCurrencyTypes = protractor_1.element(protractor_1.by.model('currency'));
        this.optCustomerNames = protractor_1.element.all(protractor_1.by.repeater('cust in Customers'));
        this.optCurrencyTypes = this.ddCurrencyTypes.all(protractor_1.by.xpath('//option'));
        this.tblCustomers = protractor_1.element.all(protractor_1.by.exactRepeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    }
    BankManagerPage.prototype.SelectAddCustomerTab = function () {
        this.btnAddCustomerTab.click();
    };
    BankManagerPage.prototype.SelectOpenAccounttab = function () {
        this.btnOpenAccountTab.click();
    };
    BankManagerPage.prototype.SelectCustomersTab = function () {
        this.btnCustomersTab.click();
    };
    BankManagerPage.prototype.ClickAddCustomer = function () {
        this.btnAddCustomer.click();
    };
    BankManagerPage.prototype.ClickProcess = function () {
        this.btnProcess.click();
    };
    BankManagerPage.prototype.EnterFirstName = function (name) {
        this.txtFirstName.sendKeys(name);
    };
    BankManagerPage.prototype.EnterLastName = function (name) {
        this.txtLastName.sendKeys(name);
    };
    BankManagerPage.prototype.EnterPostalCode = function (code) {
        this.txtPostalCode.sendKeys(code);
    };
    BankManagerPage.prototype.SelectCustomer = function (name) {
        this.optCustomerNames.each(function (option) {
            option.getText().then(function (str) {
                if (str == name) {
                    option.click();
                }
            });
        });
    };
    BankManagerPage.prototype.SelectCurrency = function (name) {
        this.optCurrencyTypes.each(function (option) {
            option.getText().then(function (str) {
                if (str == name) {
                    option.click();
                }
            });
        });
    };
    return BankManagerPage;
}());
exports.BankManagerPage = BankManagerPage;
//# sourceMappingURL=BankManagerPage.js.map