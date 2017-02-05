import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MyApp }  from '../app/rajesh.Lab/components/main';
import { Rating }  from '../app/rajesh.Lab/components/rating';

@NgModule({
  imports:      [  NgbModule.forRoot(), BrowserModule],
  declarations: [ MyApp, Rating ],
  bootstrap:    [ MyApp ]
})
export class AppModule { }
