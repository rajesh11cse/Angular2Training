
import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'people-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our developers..
    </section>
      <ul>
        <li *ngFor="let developer of people">
            <a href="#" [routerLink]="['/developers', developer.id]">
          {{developer.name}}
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
  people: Developer[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService
      .getAll()
      .subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}
