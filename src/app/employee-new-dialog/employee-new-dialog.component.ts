import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import {Role} from '../model/role';
import {Subdivision} from '../model/subdivision';
import {User} from '../model/user';
import {MatDialogRef} from '@angular/material';
import {SubdivisionService} from '../service/subdivision.service';
import {EmployeeService} from '../service/employee.service';
import {UserService} from '../service/user.service';
import {RoleService} from '../service/role.service';

@Component({
  selector: 'app-employee-new-dialog',
  templateUrl: './employee-new-dialog.component.html',
  styleUrls: ['./employee-new-dialog.component.css']
})
export class EmployeeNewDialogComponent implements OnInit {
  item: Employee = {id: 0, userId: 0, subdivisionId: 0, roleId: 0};
  roles: Role[];
  subdivisions: Subdivision[];
  users: User[];

  constructor(public dialogRef: MatDialogRef<EmployeeNewDialogComponent>,
              private subdivisionService: SubdivisionService,
              private employeeService: EmployeeService,
              private userService: UserService,
              private rolService: RoleService) { }

  ngOnInit() {
    this.subdivisionService.getSubdivisions().subscribe(data => this.subdivisions = data, error => console.log(error));
    this.userService.getUsers().subscribe(data => this.users = data, error => console.log(error));
    this.rolService.getRoles().subscribe(data => this.roles = data, error => console.log(error));
  }

  onClose() {
    this.dialogRef.close();
  }

  create() {
    this.employeeService.newEmployee(this.item).subscribe(_ => this.onClose(), error => console.log(error));
  }
}
