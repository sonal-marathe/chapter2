import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ClickItem }     from './clickitem';

@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ ClickItem ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

