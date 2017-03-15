/**
 * Created by freya on 2017/3/15.
 */

import {Component,OnInit} from '@angular/core';
@Component({
    selector:'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent implements OnInit{
    private  greeting: string;
    private showMore:boolean;
    constructor(){}
    ngOnInit(){
        this.greeting = 'Angular 2'
    }
}