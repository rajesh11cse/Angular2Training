
import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'people-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our developers..
    </section>
      <ul>
        <li *ngFor="let person of people">
            <a href="#" [routerLink]="['/developers', person.id]">
          {{person.name}}
          </a>
        </li>
        <router-outlet></router-outlet>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  people2: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService : PeopleService){ }

  ngOnInit(){
    this.peopleService
      .getAll()
      .subscribe(
         heroes => this.people2 = heroes,
            error =>  this.errorMessage = <any>error);

         console.log(this.people2);
         console.log(this.errorMessage);
  }
}