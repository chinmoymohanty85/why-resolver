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
import { Surrogate } from '../models/Surrogate';
import { SurrogateUsersService } from '../services/surrogate-users.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerIdResolverService implements Resolve<string>{
  constructor(private _surrogateUsersService: SurrogateUsersService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
    const custId = Number(route.queryParams.custid);
    return this._surrogateUsersService.GetSurrogateId(custId);
  }
}
