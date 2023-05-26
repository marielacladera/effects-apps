import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LIST_USER_URL } from '../constants/constants';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public listUsers(): Observable<any> {
    return this._httpClient.get(LIST_USER_URL)
    .pipe(
      map( (res: any) => res['data'])
    );
  }

}
