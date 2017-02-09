import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Developer } from '../models/developer';
import { PeopleService } from '../services/people.service';

@Component({
    selector: 'person-details',
    templateUrl: './app/rajesh.Lab/components/person-details.component.html'
})
export class PersonDetailsComponent implements OnInit {
    developer: Developer;
    constructor(private peopleService: PeopleService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location) {
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = Number.parseInt(params['id']);
            this.peopleService
                .get(id)
                .subscribe(p => this.developer = p);
        });
    }
    goBack(): void {
        this.location.back();
    }
}
