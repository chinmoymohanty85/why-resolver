import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
@Component({
  selector: 'app-users-with-resolver',
  templateUrl: './users-with-resolver.component.html',
  styleUrls: ['./users-with-resolver.component.scss']
})
export class UsersWithResolverComponent implements OnInit {

  constructor(private _userService: UsersService) { }
  users$ = new Observable<User[]>();
  ngOnInit(): void {
    this.users$ = this._userService.Get();
  }

}
