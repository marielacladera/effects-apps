import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FindUserByIdService } from "src/app/services/find-user-by-id.service";
import * as userAction from "../actions";
import { User } from "src/app/models/user.model";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class UserEffects {

  constructor(
    private _findUserById: FindUserByIdService,
    private _actions$: Actions
  ) {}

  loadUser$ = createEffect(
    () => this._actions$.pipe(
      ofType( userAction.loadUser),
      mergeMap(
        ( action: any ) => this._findUserById.findUserById(action.id).pipe(
          map( user => userAction.loadUserSuccess({ user: this._loadUser(user) })),
          catchError( err => of(userAction.loadUserError({ payload: err })))
        )
      )
    )
  );

  private _loadUser(user: any): User {
    return User.createUser(user);
  }

}
