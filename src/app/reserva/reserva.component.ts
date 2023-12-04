import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../services/reservas.service';
import { Reserva } from '../classes/classes';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  constructor(private rs: ReservasService) { }

  reservas: Reserva[] = []

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this.rs.getReserva().subscribe(data => {
      this.reservas = data
      // console.log(this.reservas)
    })
  }
}