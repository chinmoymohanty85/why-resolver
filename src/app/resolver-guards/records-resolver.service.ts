import { Injectable } from '@angular/core';
import { Record } from '../models/Record';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { RecordsService } from '../services/records.service';
@Injectable({
  providedIn: 'root'
})
export class RecordsResolverService implements Resolve<Record[]>{

  constructor(private _recordsService: RecordsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Record[] | Observable<Record[]> | Promise<Record[]> {
    return this._recordsService.Get();
  }
}
