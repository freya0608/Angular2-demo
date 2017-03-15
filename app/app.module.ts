/**
 * Created by freya on 2017/3/15.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[AppComponent],
    providers:[],
    bootstrap:[AppComponent],
})
export class AppModule {}
