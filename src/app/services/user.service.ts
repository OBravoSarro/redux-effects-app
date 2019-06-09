import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserGetList } from '../models/user.model';
import { API_PATH, Endpoint } from '../types/endpoint';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { RootState } from '../store/root.state';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private store: Store<RootState>) { }

  getUserList(): Observable<User[]> {
    const perPage = '10';
    return this.http.get<UserGetList> (
      `${API_PATH}/${Endpoint.GET_USER_LIST}`, { params: { per_page: perPage } }
    ).pipe(
      map((userGetData: UserGetList) => userGetData.data)
    );
  }

  getUserDetail(userId: number = 1): Observable<User> {
    const apiCall = Endpoint.GET_USER.replace(':id', String(userId));
    return this.http.get<any> (
      `${API_PATH}/${apiCall}`
    ).pipe(
      map((userGetData: any) => userGetData.data)
    );
  }

}
