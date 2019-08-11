import {Config, browser} from 'protractor';
import { Driver } from 'selenium-webdriver/opera';
export let config:Config={
    seleniumAddress:'http://localhost:4444/wd/hub',
    specs:['./Specs/BankManagerLoginSpec.js'],
    suites:{
        smoke:'./Specs/HomePageSpec.js',
        customer:'./Specs/CustomerLoginSpec.js',
        manager:'./Specs/BankManagerLoginSpec.js',
        e2e:['./Specs/HomePageSpec.js','./Specs/CustomerLoginSpec.js','./Specs/BankManagerLoginSpec.js']
    },
    //allScriptsTimeout:99999,
    onPrepare(){
       browser.driver.manage().window().maximize();
    },
    jasmineNodeOpts:{
    //    defaultTimeoutInterval:99999
        
    },
    capabilities:{
        browserName:'firefox'
    }
    /*,
    useBlockingProxy:true,
    highlightDelay:1000
    */
}