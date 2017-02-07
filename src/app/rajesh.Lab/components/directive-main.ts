import { Component, Directive } from '@angular/core';
//import { Rating } from './rating';

@Component({
  selector: 'my-app',
  templateUrl: './app/rajesh.Lab/components/directive-main.html'
})
//@Directive({
 // selector: '[Rating]'
//})
export class MyApp {
  private rate: number;
  constructor() {
    this.rate = 2;
  }
  // onRate(value:number) {
  //   this.rate = value;
  // }
}