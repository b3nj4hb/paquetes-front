import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../services/reservas.service';
import { Cliente, Empleado, Paquete, Reserva } from '../classes/classes';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  constructor(private rs: ReservasService) { }

  reservas: Reserva[] = []
  reserva = new Reserva

  paquetes: Paquete[] = []
  clientes: Cliente[] = []
  empleados: Empleado[] = []

  ngOnInit(): void {
    this.getReserva()
    this.getPaquete()
    this.getCliente()
    this.getEmpleado()
  }

  getReserva() {
    this.rs.getReserva().subscribe(data => {
      this.reservas = data
      // console.log(this.reservas)
    })
  }

  postReserva() {
    this.rs.postReserva(this.reserva).subscribe(data => {
      console.log(data)
    })
    console.log(this.reserva)
  }

  deleteReserva() {
    // const swalWithBootstrapButtons = Swal.mixin({
    //   customClass: {
    //     confirmButton: 'btn btn-success',
    //     cancelButton: 'btn btn-danger'
    //   },
    //   buttonsStyling: false
  }

  getPaquete() {
    this.rs.getPaquete().subscribe(data => {
      this.paquetes = data
      // console.log(this.reservas)
    })
  }
  getCliente() {
    this.rs.getCliente().subscribe(data => {
      this.clientes = data
      // console.log(this.reservas)
    })
  }
  getEmpleado() {
    this.rs.getEmpleado().subscribe(data => {
      this.empleados = data
      // console.log(this.reservas)
    })
  }

}