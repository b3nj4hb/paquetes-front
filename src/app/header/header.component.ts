import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  buttons: Array<any> = [
    {
      text: 'Home',
      url: ''
    },
    {
      text: 'Gestión de Reservas',
      url: '/reserva'
    },
    {
      text: 'Reportes',
      url: '/reportes'
    },
  ]
}
