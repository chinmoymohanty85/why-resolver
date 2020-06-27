import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private _jsonUrl = 'assets/orders.json';
  constructor(private http: HttpClient) { }

  Get(): Observable<Order[]> {
    return this.http.get<Order[]>(this._jsonUrl);
  }

  GetOrdersBySurrogateId(id: string): Observable<Order[]> {
    // return this.http.get<Order[]>(this._jsonUrl);
    return this.http.get<Order[]>(this._jsonUrl).pipe(
      map(r => r.filter(t => t.guid === id))
    );
  }
}
