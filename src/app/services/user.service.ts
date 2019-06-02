import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserGetList } from '../models/user.model';
import { API_PATH, Endpoint } from '../types/endpoint';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    const perPage = '10';
    return this.http.get<UserGetList>(
      `${API_PATH}/${Endpoint.GET_USER_LIST}`, { params: { per_page: perPage } }
    ).pipe(
      map(dataUser => dataUser.data)
    );
  }

}
