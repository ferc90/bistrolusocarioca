import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Lanches', url: '/lanches', icon: 'fast-food' },
    { title: 'Entradas & Pratos', url: '/entradaspratos', icon: 'restaurant' },
    { title: 'Sobremesas & Bebidas', url: '/sobremesasbebidas', icon: 'cafe' },
   
  ];
  
  constructor() {}
}
