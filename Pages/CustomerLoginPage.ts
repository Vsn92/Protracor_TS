import { element, by, ExpectedConditions, browser } from "protractor";
import { CommonPage } from "./CommonPage";

export class CustomerLoginPage{
    ddCustomerName=element(by.model('custId'));
    optCustomers=element.all(by.repeater('cust in Customers'));
    btnLogin=element(by.buttonText('Login'));
    SelectCustomer(name:string){
        this.optCustomers.each((option)=>{
            
            option.getText().then((str)=>{
               if(str==name)
                    option.click();
            });
        });
    }
    ClickLogin(){
        this.btnLogin.click();
    }
    PerformLogin(name:string){
        this.SelectCustomer(name);
        browser.wait(ExpectedConditions.visibilityOf(this.btnLogin),10000);
        this.ClickLogin();
        browser.wait(ExpectedConditions.visibilityOf(new CommonPage().btnLogout),3000);
    }
}