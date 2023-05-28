import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/users.actions';
import { mergeMap, tap, map, catchError, of } from 'rxjs';
import { ListUsersService } from 'src/app/services/list-users.service';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UsersEffects {

  constructor(
    private _listUsersServices: ListUsersService,
    private _actions$: Actions
  ) {}

  loadUsers$ = createEffect(
    () => this._actions$.pipe(
      ofType( userActions.loadUsers),
      mergeMap(
        () => this._listUsersServices.listUsers().pipe(
          map( users => userActions.loadUsersSuccess({ users: this._loadUsers(users) })),
          catchError( err => of(userActions.loadUsersError({payload: err} )))
        )
      )
    )
  );

  private _loadUsers(users: any): User[] {
    return users.map((user:any) => User.createUser(user))
  }

}
