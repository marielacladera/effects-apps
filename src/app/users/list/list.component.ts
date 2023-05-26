import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ListUsersService } from 'src/app/services/list-users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public users: User[];

  constructor(
    private _listUserService: ListUsersService
  ) {
    this.users = [];
  }

  public ngOnInit(): void {
   this._initialize();
  }

  private _initialize(): void {
    this._listUsers();
  }

  private _listUsers(): void {
    this._listUserService.listUsers().subscribe( users => {
      this._loadDataOfUsers(users);
    });
  }

  private _loadDataOfUsers(users: any): void {
    users.forEach((user: any) => {
      const auxUser: User = User.createUser(user);
      this.users.push(auxUser);
    });
    console.log(this.users)
  }

}
