import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter, take, switchMap, flatMap, takeLast, mergeAll, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Surrogate } from '../models/Surrogate';
import { flatten } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SurrogateUsersService {
  private _jsonUrl = 'assets/surrogates.json';
  constructor(private http: HttpClient) { }

  Get(): Observable<Surrogate[]> {
    return this.http.get<Surrogate[]>(this._jsonUrl);
  }

  GetSurrogateId(custId: number): Observable<string> {
    return this.http.get<Surrogate[]>(this._jsonUrl).pipe(
      map(r => r.find(t => t.id === custId)),
      map(y => y.guid)
    );
  }
}
