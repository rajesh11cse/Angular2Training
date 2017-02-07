import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <people-list></people-list>
`,
  providers: [PeopleService]
})
export class AppComponent {
  title:string = 'Mind Traits Developers!';
}


// https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/