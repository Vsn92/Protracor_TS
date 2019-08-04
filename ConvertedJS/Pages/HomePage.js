"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.btnCustomerLogin = protractor_1.element(protractor_1.by.buttonText('Customer Login'));
        this.btnBankManagerLogin = protractor_1.element(protractor_1.by.buttonText('Bank Manager Login'));
    }
    HomePage.prototype.ClickCustomerLogin = function () {
        this.btnCustomerLogin.click();
    };
    HomePage.prototype.ClickBankManagerLogin = function () {
        this.btnBankManagerLogin.click();
    };
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map