import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reserva, Paquete, Cliente, Empleado } from '../classes/classes';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private urlEndPoint: string = 'http://localhost:9292/api/reserva'
  private urlVarios: string = 'http://localhost:9292/api'

  constructor(private http: HttpClient, private router: Router) { }

  getReserva(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.urlEndPoint + '/all');
  }

  postReserva(post: Reserva): Observable<any> {
    return this.http.post<Reserva>(this.urlEndPoint + '/create', post, this.httpOptions)
  }

  getPaquete(): Observable<Paquete[]> {
    return this.http.get<Paquete[]>(this.urlVarios + '/paquete/all');
  }

  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlVarios + '/cliente/all');
  }

  getEmpleado(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.urlVarios + '/empleado/all');
  }

  deleteReserva(id: number) {
    return this.http.delete(`${this.urlVarios}/reserva/delete/${id}`)
  }
}