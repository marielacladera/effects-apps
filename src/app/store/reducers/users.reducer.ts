import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions';
import { User } from 'src/app/models/user.model';

export interface UsersState {
  loaded: boolean,
  loading: boolean,
  error: any,
  users: User[]
}

export const usersInitialState: UsersState = {
  loaded: false,
  loading:false,
  error: null,
  users: [],
}

export const usersReducer = createReducer(
  usersInitialState,
  on(loadUsers, state => ({ ...state, loading: true })),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    loaded: true,
    loading: false,
    users: [...users]
  })),

  on(loadUsersError, (state, {payload}) => ({
    ...state,
    loaded: false,
    loading: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  })),
);
