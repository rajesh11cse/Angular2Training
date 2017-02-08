import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Person } from '../models/person';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'person-details',
  templateUrl: './app/rajesh.Lab/components/person-details.component.html'
})
export class PersonDetailsComponent implements OnInit {
    person: Person;
    sub: any;
    professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

    constructor(private peopleService: PeopleService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        // this.sub = this.route.params.subscribe(params => {
        //   let id = Number.parseInt(params['id']);
        //   console.log('getting person with id: ', id);
        //   this.peopleService
        //     .get(id)
        //     .subscribe(p => this.person = p);
        // });
    }
}