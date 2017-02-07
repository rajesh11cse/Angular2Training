import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyApp }  from '../app/rajesh.Lab/components/directive-main';
import { Rating }  from '../app/rajesh.Lab/components/directive-rating';
import { AppComponent }  from '../app/rajesh.Lab/components/app.component';
import { PeopleListComponent } from '../app/rajesh.Lab/components/people-list.component';
import { PersonDetailsComponent } from '../app/rajesh.Lab/components/person-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule],
  declarations: [ MyApp, Rating, AppComponent,  PeopleListComponent, PersonDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
