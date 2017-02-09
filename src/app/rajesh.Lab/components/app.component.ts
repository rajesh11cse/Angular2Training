import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  title: string = 'MindTraits Developers!';
}


// https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/

//https://scotch.io/tutorials/how-to-implement-a-custom-validator-directive-confirm-password-in-angular-2