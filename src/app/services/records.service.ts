import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Record } from '../models/Record';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  private _jsonUrl = 'assets/records.json';
  constructor(private http: HttpClient) { }

  Get(): Observable<Record[]> {
    return this.http.get<Record[]>(this._jsonUrl);
  }
}
