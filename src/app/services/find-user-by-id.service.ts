import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FIND_USER_BY_ID_URL } from '../constants/constants';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindUserByIdService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public findUserById(id: number) {
    return this._httpClient.get(`${FIND_USER_BY_ID_URL}/${id}`)
    .pipe(
      map( (resp: any) => resp['data'])
    );
  }
}
