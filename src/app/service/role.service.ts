import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role} from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  url = 'http://localhost:8080/role/';

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get<Role[]>(this.url);
  }

  newRole(roleName: string) {
    return this.http.post<void>(this.url, {id: 0, name: roleName});
  }

  deleteRole(roleId: number) {
    return this.http.delete<void>(this.url + roleId);
  }

  updateCompany(role: Role) {
    return this.http.put(this.url, role);
  }
}
