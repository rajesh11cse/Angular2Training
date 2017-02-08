import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Person } from '../models/person';

// const PEOPLE: Person[] = [
//   { id: 1, name: 'Vicky Gupta', age: 27, profession: 'SSD Engineer' },
//   { id: 2, name: 'Rajesh Kumar', age: 25, profession: 'Trainer' },
//   { id: 3, name: 'Tezendra Dahal', age: 24, profession: 'Learner' },
// ];

@Injectable()
export class PeopleService {
  private baseUrl: string = 'api/developers';

  constructor(private http: Http) {

    console.log(this.baseUrl)
  }
  
  getAll(): Observable<Person[]> {
    return this.http.get(this.baseUrl).map((res:Response) => res.json());
      //.map(mapDevelopers)
      //.catch(handleError);
     // console.log(people$);
    //return people$;
  }

  private getDevelopers(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    console.log(headers)
    return headers;
  }
  
}

function mapDevelopers(response:Response): Person[]{
   return response.json();
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `There  was a problem,  we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
