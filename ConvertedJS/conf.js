"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./Specs/BankManagerLoginSpec.js'],
    //allScriptsTimeout:99999,
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
    },
    jasmineNodeOpts: {
    //    defaultTimeoutInterval:99999
    }
    /*,
    useBlockingProxy:true,
    highlightDelay:1000
    */
};
//# sourceMappingURL=conf.js.map