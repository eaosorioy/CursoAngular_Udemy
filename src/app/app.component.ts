import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi App de Angular';
  
  // otra forma 
  // increseBy(value: string) {
  //   if (value == 'suma') {
  //     this.counter += 1;
  //   } else {
  //     this.counter -= 1;
  //   }
  // }


}
