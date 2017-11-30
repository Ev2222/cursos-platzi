import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a = 3;
  b= 5;
  listo = true;
  nombre: string;

  hacerAlgo() {
    console.log('soy lista y bonita');
  }

  lugares: any = [
    {active: true, nombre: 'Floreria Margarita'},
    {active: false, nombre: 'Donas redonditas'},
    {active: false, nombre: 'Mascotas Huellitas'},
    {active: true, nombre: 'La casita'},
    {active: true, nombre: 'Sushito'},    
  ];
  lat: number= 40.4942691;
  lng: number= -3.3691339;
    
}