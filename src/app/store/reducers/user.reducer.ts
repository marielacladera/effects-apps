import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserError, loadUserSuccess } from '../actions';
import { User } from 'src/app/models/user.model';

export interface UserState {
  user: User | null,
  loading: boolean,
  loaded: boolean,
  error: any,
  id: string | null,
}

export const userInitialState: UserState = {
  loaded: false,
  loading:false,
  error: null,
  user: null,
  id: null
}

export const userReducer = createReducer(
  userInitialState,
  on(loadUser, (state, { id } ) => ({
    ...state,
    loading: true,
    id: id
  })),

  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    loaded: true,
    loading: false,
    user: user,
    error: null,
  })),

  on(loadUserError, (state, { payload }) => ({
    ...state,
    loaded: false,
    loading: false,
    user: null,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  })),
);
