import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8080/user/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  newUser(user: User) {
    return this.http.post<void>(this.url, user);
  }

  deleteUser(userId: number) {
    return this.http.delete<void>(this.url + userId);
  }

  updateUser(user: User) {
    return this.http.put(this.url, user);
  }
}
