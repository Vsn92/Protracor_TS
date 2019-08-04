"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CommonPage = /** @class */ (function () {
    function CommonPage() {
        this.lblPageHeader = protractor_1.element(protractor_1.by.xpath('//strong'));
        this.btnHome = protractor_1.element(protractor_1.by.buttonText('Home'));
        this.btnLogout = protractor_1.element(protractor_1.by.buttonText('Logout'));
    }
    CommonPage.prototype.ClickHomeButton = function () {
        this.btnHome.click();
    };
    CommonPage.prototype.ClickLogout = function () {
        this.btnLogout.click();
    };
    return CommonPage;
}());
exports.CommonPage = CommonPage;
//# sourceMappingURL=CommonPage.js.map