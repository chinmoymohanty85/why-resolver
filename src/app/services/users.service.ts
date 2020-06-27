import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _jsonUrl = 'assets/users.json';
  constructor(private http: HttpClient) { }

  Get(): Observable<User[]> {
    return this.http.get<User[]>(this._jsonUrl);
  }
}
