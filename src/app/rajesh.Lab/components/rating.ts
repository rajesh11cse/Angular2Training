import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'rating',
  inputs: ['rate'],
  outputs: ['updateRate: rateChange'],
  
  template: `
    <span>
    <span tabindex="0">
    <template ngFor let-task [ngForOf]="range" let-i="index">
        <span style="font-size:50px; cursor:pointer;" (click)="update(i + 1)" [ngClass]="{'greenStar' : i < rate, 'redStar':i >= rate}">*</span>
    </template>
    </span>
  `,
 styles: [`
  .greenStar {
    color: green;
  }, 
  .redStar {
    color: red;
  }`]
})
export class Rating {
   range:Array<number> = [1,2,3,4,5];
   rate:number;
   private updateRate:EventEmitter<number> = new EventEmitter();

   update(value:number) {
    this.rate = value;
    this.updateRate.next(value);
  }
}