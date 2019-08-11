"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//import * as HtmlReporter from 'protractor-beautiful-reporter';
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./Specs/BankManagerLoginSpec.js'],
    suites: {
        smoke: './Specs/HomePageSpec.js',
        customer: './Specs/CustomerLoginSpec.js',
        manager: './Specs/BankManagerLoginSpec.js',
        e2e: ['./Specs/HomePageSpec.js', './Specs/CustomerLoginSpec.js', './Specs/BankManagerLoginSpec.js']
    },
    //allScriptsTimeout:99999,
    onPrepare: function () {
        var HtmlReporter = require('protractor-beautiful-reporter');
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './Reports',
            screenshotsSubfolder: 'Screenshots',
            jsonsSubfolder: 'Jsons'
        }).getJasmine2Reporter());
        protractor_1.browser.driver.manage().window().maximize();
    },
    jasmineNodeOpts: {
    //    defaultTimeoutInterval:99999
    },
    capabilities: {
        browserName: 'chrome'
    }
    /*,
    useBlockingProxy:true,
    highlightDelay:1000
    */
};
//# sourceMappingURL=conf.js.map