import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reserva } from '../classes/classes';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private urlEndPoint: string = 'http://localhost:9292/api/reserva'
  constructor(private http: HttpClient, private router: Router) { }

  getReserva(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.urlEndPoint + '/all');
  }

}