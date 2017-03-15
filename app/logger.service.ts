/**
 * Created by freya on 2017/3/15.
 */
import {Injectable} from '@angular/core';
@Injectable()
export class LoggerService{
    constructor(){}
    
    debug(msg:string){
       console.log(msg); 
    }
}
