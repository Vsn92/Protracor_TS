import { existsSync, mkdirSync, createWriteStream } from "fs";
import { browser } from "protractor";

export class UtilityClass{
    static takeScreenshot(name:string){
        let path='./Screenshots';
        if(!existsSync(path))
            mkdirSync(path);
        
        browser.takeScreenshot().then((pic)=>{
            let strm=createWriteStream(path+'/'+name+'.png');
            strm.write(new Buffer(pic,'base64'));
            strm.end();
        });
    }
}