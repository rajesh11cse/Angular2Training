import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import {Observable} from 'rxjs/Observable';

const PEOPLE : Person[] = [
      {id: 1, name: 'Vicky Gupta', age: 27,  profession: 'SSD Engineer'},
      {id: 2, name: 'Rajesh Kuamar', age: 25,  profession: 'Trainer'},
      {id: 3, name: 'Tezendra Dahal', age: 24,  profession: 'Learner'},
    ];

@Injectable()
export class PeopleService{

  // getAll() : Promise<Person[]> {
  //   //return PEOPLE.map(p => this.clone(p));
  //   return Promise.resolve(PEOPLE);
  // }
  getAll(): Observable<Person[]>{
    PEOPLE
      .map(x => x);
      return
  }
  // get(id: number) : Person {
  //   return this.clone(PEOPLE.find(p => p.id === id));
  // }
  // save(person: Person){
  //   let originalPerson = PEOPLE.find(p => p.id === person.id);
  //   if (originalPerson) Object.assign(originalPerson, person);
  //   // saved muahahaha
  // }

  // private clone(object: any){
  //   // hack
  //   return JSON.parse(JSON.stringify(object));
  // }
}