import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi proyecto en Angular 4';
  lugares:any = [
    {plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre: 'Heladeria 4D'},
    {plan: 'gratuito', cercania: 1, distancia: 6.2, active: false, nombre: 'Presto Pizza'},
    {plan: 'pagado', cercania: 2, distancia: 4, active: true, nombre: 'La Mansión del Pan'},
    {plan: 'gratuito', cercania: 2, distancia: 15, active: true, nombre: 'Pizzeria La Mejor Pizza'},
    {plan: 'pagado', cercania: 3, distancia: 38, active: false, nombre: 'El mejor negocio de comida'},
    {plan: 'gratuito', cercania: 3, distancia: 45, active: true, nombre: 'A donde tú quieras'}
  ];
  lat:number = 10.1520342;
  lng:number = -68.4004204;
  constructor(){

  }
}
