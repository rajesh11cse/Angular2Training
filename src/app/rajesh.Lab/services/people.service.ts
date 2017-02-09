import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Developer } from '../models/developer';

@Injectable()
export class PeopleService {
  private baseUrl: string = 'api/developers';

  constructor(private http: Http) {
  }

  getAll(): Observable<Developer[]> {
    let devloper = this.http
      .get(this.baseUrl)
      .map(mapDevelopers)
      .catch(handleError);
    return devloper;
  }

 get(id: number): Observable<Developer> {
    let developer = this.http
      .get(`${this.baseUrl}/${id}`)
      .map(mapDevelopers)
      .catch(handleError);
      return developer;
  }

}

function mapDevelopers(response: Response) {
  console.log(response.json());
  console.log(response.json().data as Developer[]);
  return response.json().data as Developer[];
}

function handleError(error: any) {
  let errorMsg = error.message || `There  was a problem,  we couldn't retrieve your data!`
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}

