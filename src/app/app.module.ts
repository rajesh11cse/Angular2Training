import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routing } from '../app/rajesh.Lab/routes/app.routes';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DevelopersData } from '../app/rajesh.Lab/components/developers-data';

import { MyApp } from '../app/rajesh.Lab/components/directive-main';
import { Rating } from '../app/rajesh.Lab/components/directive-rating';
import { AppComponent } from '../app/rajesh.Lab/components/app.component';
import { PeopleListComponent } from '../app/rajesh.Lab/components/people-list.component';
import { PersonDetailsComponent } from '../app/rajesh.Lab/components/person-details.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(DevelopersData)
    ],
  declarations: [MyApp, Rating, AppComponent, PeopleListComponent, PersonDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
