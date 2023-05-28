import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { IconDefinition, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  public error: any;
  public faSpinner: IconDefinition;
  public loading: boolean;
  public users: User[];

  constructor(
    private _store: Store<AppState>,
    private _cdr: ChangeDetectorRef
  ) {
    this.faSpinner= faSpinner;
    this.loading = false;
    this.users = [];
  }

  public ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._store.select('users').subscribe(({ users, loading, error }) => {
      this.error = error;
      this.loading = loading;
      this.users = users;
      this._cdr.markForCheck();
    })
    this._store.dispatch(loadUsers());
  }


  /*private _initialize(): void {
    this._listUsers();
  }

  private _listUsers(): void {
    this._listUserService.listUsers().subscribe( users => {
      this._loadDataOfUsers(users);
    });
  }

  private _loadDataOfUsers(users: any): void {
    this.users = users.map((user:any) => User.createUser(user))
  }*/

}
