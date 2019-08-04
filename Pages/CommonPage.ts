import { element,by } from "protractor";

export class CommonPage{
    lblPageHeader=element(by.xpath('//strong'));
    btnHome=element(by.buttonText('Home'));
    btnLogout=element(by.buttonText('Logout'));

    ClickHomeButton()
    {
        this.btnHome.click();
    }
    ClickLogout(){
        this.btnLogout.click();
    }
}