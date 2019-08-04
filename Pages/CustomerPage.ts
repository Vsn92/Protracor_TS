import { element, by, ExpectedConditions, browser } from "protractor";
import { SrvRecord } from "dns";

export class CustomerPage{
    lblUserName=element(by.css('.fontBig.ng-binding'));
    ddAccount=element(by.model('accountNo'));
    optAccounts=element.all(by.options('account for account in Accounts'));
    lblAccountNumber=element(by.css('div.center strong:nth-child(1)'));
    lblBalance=element(by.css('div.center strong:nth-child(2)'));
    lblCurrency=element(by.css('div.center strong:nth-child(3)'));
    btnTransactionsTab=element(by.buttonText('Transactions'));
    btnDepositTab=element(by.buttonText('Deposit'));
    btnWihdrawalTab=element(by.buttonText('Withdrawl'));
    txtAmount=element(by.model('amount'));
    btnDeposit=element(by.css('.btn.btn-default'));
    btnWithDraw=element(by.buttonText('Withdraw'));
    lblMessage=element(by.css('.error.ng-binding'));

    SelectAccountNumber(accNo:string)
    {
        this.optAccounts.each((acc)=>{
            acc.getText().then((str)=>{
                if(str==accNo)
                    acc.click();
            });
        });
    }
    SelectTransacionsTab(){
        this.btnTransactionsTab.click();
    }
    SelectDepositTab(){
        this.btnDepositTab.click();
    }
    SelectWithdrawalTab(){
        this.btnWihdrawalTab.click();
    }
    EnterAmount(amt:string){
        this.txtAmount.sendKeys(amt);
    }
    ClickDeposit(){
        this.btnDeposit.click();
    }
    ClickWithdraw(){
        this.btnWithDraw.click();   
    }

    PerformDeposit(amt:string){
        this.SelectDepositTab();
        browser.wait(ExpectedConditions.visibilityOf(this.btnDeposit),3000);
        this.EnterAmount(amt);
        this.ClickDeposit();
        expect<any>(this.lblMessage.getText()).toBe('Deposit Successful');
    }
    PerformWihdrawal(amt:string){
        this.SelectWithdrawalTab();
        browser.wait(ExpectedConditions.visibilityOf(this.btnDeposit),3000);
        this.EnterAmount(amt);
        this.ClickWithdraw();
        //expect<any>(this.lblMessage.getText()).toBe('Transacion Successful');
    }
}