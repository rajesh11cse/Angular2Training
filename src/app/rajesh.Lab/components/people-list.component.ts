
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
            <a href="#">
          {{person.name}}
          </a>
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getAll()
    //.then(peoples => this.people = peoples);//For Promise return type
    .subscribe(p => this.people = p)
    /* happy path */ //p => this.people = p,
    /* error path */ //e => this.errorMessage = e,
    /* onComplete */ //() => this.isLoading = false);
  }
}