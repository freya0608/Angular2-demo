/**
 * Created by freya on 2017/3/15.
 */

import {Component,OnInit} from '@angular/core';
import {LoggerService} from './logger.service'
@Component({
    selector:'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent implements OnInit{
    private  greeting: string;
    private showMore:boolean;
    private msgToChild:string;
    private msgFromChild:string;
    constructor(private logger:LoggerService){}
    ngOnInit(){
        this.greeting = 'Angular 2';
        this.msgToChild = 'message form parent';
        this.logger.debug('根组件已经初始化完毕')
    }
    receive(msg:string){
        this.msgFromChild=msg;
    }
}