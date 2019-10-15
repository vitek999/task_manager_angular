import {Component, Inject, OnInit} from '@angular/core';
import {Employee} from '../model/employee';
import {User} from '../model/user';
import {Subdivision} from '../model/subdivision';
import {Role} from '../model/role';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SubdivisionService} from '../service/subdivision.service';
import {EmployeeService} from '../service/employee.service';
import {UserService} from '../service/user.service';
import {RoleService} from '../service/role.service';

@Component({
  selector: 'app-employee-info-dialog',
  templateUrl: './employee-info-dialog.component.html',
  styleUrls: ['./employee-info-dialog.component.css']
})
export class EmployeeInfoDialogComponent implements OnInit {
  isUsedError: boolean;
  errorMessage: string;
  item: Employee;
  users: User[];
  subdivisions: Subdivision[];
  roles: Role[];

  constructor(public dialogRef: MatDialogRef<EmployeeInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Employee,
              private subdivisionService: SubdivisionService,
              private employeeService: EmployeeService,
              private userService: UserService,
              private rolService: RoleService) {
    this.item = data;
  }

  ngOnInit() {
    this.subdivisionService.getSubdivisions().subscribe(data => this.subdivisions = data, error => console.log(error));
    this.userService.getUsers().subscribe(data => this.users = data, error => console.log(error));
    this.rolService.getRoles().subscribe(data => this.roles = data, error => console.log(error));
  }

  onClose() {
    this.dialogRef.close();
  }

  delete() {
    this.employeeService.deleteEmployee(this.item.id).subscribe(_ => this.onClose(), error => {
      console.log(error);
      if (error.status === 409) {
        this.isUsedError = true;
        this.errorMessage = 'Ошибка: этот объект используется \n в другом объект';
      }
    });
  }

  update() {
    this.employeeService.updateEmployee(this.item).subscribe(_ => this.onClose(), error => console.log(error));
  }
}
