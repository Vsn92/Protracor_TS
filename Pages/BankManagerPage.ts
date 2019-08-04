import { element, by } from "protractor";

export class BankManagerPage{

    btnAddCustomerTab=element(by.buttonText('Add Customer'));
    btnCustomersTab=element(by.buttonText('Customers'));
    btnOpenAccountTab=element(by.buttonText('Open Account'));
    btnAddCustomer=element(by.css('.btn.btn-default'));
    btnProcess=element(by.buttonText('Process'));

    txtFirstName=element(by.model('fName'));
    txtLastName=element(by.model('lName'));
    txtPostalCode=element(by.model('postCd'));

    ddCustomerNames=element(by.model('custId'));
    ddCurrencyTypes=element(by.model('currency'));

    optCustomerNames=element.all(by.repeater('cust in Customers'));
    optCurrencyTypes=this.ddCurrencyTypes.all(by.xpath('//option'));

    tblCustomers=element.all(by.exactRepeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    
    SelectAddCustomerTab()
    {
        this.btnAddCustomerTab.click();
    }
    SelectOpenAccounttab()
    {
        this.btnOpenAccountTab.click();
    }
    SelectCustomersTab()
    {
        this.btnCustomersTab.click();
    }
    ClickAddCustomer(){
        this.btnAddCustomer.click();
    }
    ClickProcess(){
        this.btnProcess.click();
    }
    EnterFirstName(name:string){
        this.txtFirstName.sendKeys(name);
    }
    EnterLastName(name:string){
        this.txtLastName.sendKeys(name);
    }
    EnterPostalCode(code:string){
        this.txtPostalCode.sendKeys(code);
    }
    SelectCustomer(name:string){
        this.optCustomerNames.each((option)=>{
            option.getText().then((str)=>{
                if(str==name){
                    option.click();
                }
            });
        });
    }
    SelectCurrency(name:string){
        this.optCurrencyTypes.each((option)=>{
            option.getText().then((str)=>{
                if(str==name){
                    option.click();
                }
            });
        });
    }
}