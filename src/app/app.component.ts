import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi proyecto en Angular 4';
  lat:number = 10.1520342;
  lng:number = -68.4004204;
  constructor(){

  }
}
