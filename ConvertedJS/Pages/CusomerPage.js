"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CustomerPage = /** @class */ (function () {
    function CustomerPage() {
        this.lblUserName = protractor_1.element(protractor_1.by.css('.fontBig.ng-binding'));
        this.ddAccount = protractor_1.element(protractor_1.by.model('accountNo'));
        this.optAccounts = protractor_1.element.all(protractor_1.by.options('account for account in Accounts'));
        this.lblAccountNumber = protractor_1.element(protractor_1.by.css('div.center strong:nh-child(1)'));
        this.lblBalance = protractor_1.element(protractor_1.by.css('div.center strong:nh-child(1)'));
        this.lblCurrency = protractor_1.element(protractor_1.by.css('div.center strong:nh-child(1)'));
        this.btnTransactionsTab = protractor_1.element(protractor_1.by.buttonText('Transactions'));
        this.btnDepositTab = protractor_1.element(protractor_1.by.buttonText('Deposit'));
        this.btnWihdrawalTab = protractor_1.element(protractor_1.by.buttonText('Withdrawl'));
        this.txtAmount = protractor_1.element(protractor_1.by.model('amount'));
        this.btnDeposit = protractor_1.element(protractor_1.by.css('.btn.btn-default'));
        this.btnWithDraw = protractor_1.element(protractor_1.by.buttonText('Wihdraw'));
    }
    CustomerPage.prototype.SelectAccountNumber = function (accNo) {
        this.optAccounts.each(function (acc) {
            acc.getText().then(function (str) {
                console.log(str);
                console.log(accNo);
                if (str == accNo)
                    acc.click();
            });
        });
    };
    CustomerPage.prototype.SelectTransacionsTab = function () {
        this.btnTransactionsTab.click();
    };
    CustomerPage.prototype.SelectDepositTab = function () {
        this.btnDepositTab.click();
    };
    CustomerPage.prototype.SelectWithdrawalTab = function () {
        this.btnWihdrawalTab.click();
    };
    CustomerPage.prototype.EnterAmount = function (amt) {
        this.txtAmount.sendKeys(amt);
    };
    CustomerPage.prototype.ClickDeposit = function () {
        this.btnDeposit.click();
    };
    CustomerPage.prototype.ClickWithdraw = function () {
        this.btnWithDraw.click();
    };
    return CustomerPage;
}());
exports.CustomerPage = CustomerPage;
//# sourceMappingURL=CusomerPage.js.map