import { Component } from "@angular/core";


@Component({
    selector:'app-counter',
    template:`
    <hr>
    <h3>counter: {{counter}} </h3>
    <button (click)="increseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increseBy(-1)">-1</button>`,
})
export class CounterComponent {
    public counter: number = 10;
  
  
    increseBy(value: number) {
      this.counter += value;
    }
    reset() {
      this.counter = 10;
    }
}