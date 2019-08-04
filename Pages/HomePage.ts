import { element,by } from "protractor";

export class HomePage{
    btnCustomerLogin=element(by.buttonText('Customer Login'));
    btnBankManagerLogin=element(by.buttonText('Bank Manager Login'));
    
    public ClickCustomerLogin(){
        this.btnCustomerLogin.click();
    }
    public ClickBankManagerLogin(){
        this.btnBankManagerLogin.click();
    }
}