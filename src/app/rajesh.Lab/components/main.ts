import {Component, Directive} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/rajesh.Lab/components/main.html'
})
@Directive({
  selector: '[Rating]'
})
export class MyApp {
  private rate: number;
  private rate2: number;
  private customRate: number;
  private customRate2: number;
  
  constructor() {
    this.rate = 2;
    this.rate2 = 3;
    this.customRate = this.rate2 * 20;
    this.customRate2 = 0.2;
  }
  
  onRate(value:number) {
    this.customRate = value * 20;
  }
  
  onRate2(value:number) {
    this.customRate2 = value / 5;
  }
}