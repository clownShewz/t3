import { Injectable } from '@angular/core';

@Injectable()
export class Logger{
    log(msg:any){console.log(msg);}
    warn(msg:any){console.warn(msg);}
    error(msg:any){console.error(msg);}
    table(msg:any){
        if ( Array.isArray(msg)){
            let resp:any[] = [];
            msg.map((m=>{resp.push(m)}));
            console.table(resp);
        }
        else this.log(msg);
    }
};
