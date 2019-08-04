"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CustomerPage = /** @class */ (function () {
    function CustomerPage() {
        this.lblUserName = protractor_1.element(protractor_1.by.css('.fontBig.ng-binding'));
        this.ddAccount = protractor_1.element(protractor_1.by.model('accountNo'));
        this.optAccounts = protractor_1.element.all(protractor_1.by.options('account for account in Accounts'));
        this.lblAccountNumber = protractor_1.element(protractor_1.by.css('div.center strong:nth-child(1)'));
        this.lblBalance = protractor_1.element(protractor_1.by.css('div.center strong:nth-child(2)'));
        this.lblCurrency = protractor_1.element(protractor_1.by.css('div.center strong:nth-child(3)'));
        this.btnTransactionsTab = protractor_1.element(protractor_1.by.buttonText('Transactions'));
        this.btnDepositTab = protractor_1.element(protractor_1.by.buttonText('Deposit'));
        this.btnWihdrawalTab = protractor_1.element(protractor_1.by.buttonText('Withdrawl'));
        this.txtAmount = protractor_1.element(protractor_1.by.model('amount'));
        this.btnDeposit = protractor_1.element(protractor_1.by.css('.btn.btn-default'));
        this.btnWithDraw = protractor_1.element(protractor_1.by.buttonText('Withdraw'));
        this.lblMessage = protractor_1.element(protractor_1.by.css('.error.ng-binding'));
    }
    CustomerPage.prototype.SelectAccountNumber = function (accNo) {
        this.optAccounts.each(function (acc) {
            acc.getText().then(function (str) {
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
    CustomerPage.prototype.PerformDeposit = function (amt) {
        this.SelectDepositTab();
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.btnDeposit), 3000);
        this.EnterAmount(amt);
        this.ClickDeposit();
        expect(this.lblMessage.getText()).toBe('Deposit Successful');
    };
    CustomerPage.prototype.PerformWihdrawal = function (amt) {
        this.SelectWithdrawalTab();
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.btnDeposit), 3000);
        this.EnterAmount(amt);
        this.ClickWithdraw();
        //expect<any>(this.lblMessage.getText()).toBe('Transacion Successful');
    };
    return CustomerPage;
}());
exports.CustomerPage = CustomerPage;
//# sourceMappingURL=CustomerPage.js.map