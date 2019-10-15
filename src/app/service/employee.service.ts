import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:8080/employee/';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.url);
  }

  newEmployee(employee: Employee) {
    return this.http.post<void>(this.url, employee);
  }

  deleteEmployee(employeeId: number) {
    return this.http.delete<void>(this.url + employeeId);
  }

  updateEmployee(employee: Employee) {
    return this.http.put(this.url, employee);
  }
}
