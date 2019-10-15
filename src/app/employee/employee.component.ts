import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../service/employee.service';
import {MatDialog} from '@angular/material';
import {Employee} from '../model/employee';
import {SubdivisionInfoDialogComponent} from '../subdivision-info-dialog/subdivision-info-dialog.component';
import {EmployeeInfoDialogComponent} from '../employee-info-dialog/employee-info-dialog.component';
import {EmployeeNewDialogComponent} from '../employee-new-dialog/employee-new-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  dataSource: Employee[] = [];
  displayedColumns: string[] = ['id', 'roleId', 'subdivisionId', 'userId'];

  constructor(private employeeService: EmployeeService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getEmployes();
  }

  getEmployes() {
    this.employeeService.getEmployees().subscribe(data => this.dataSource = data, error => console.log(error));
  }

  selectRow(row) {
    const dialogRef = this.dialog.open(EmployeeInfoDialogComponent, {data: row});
    dialogRef.afterClosed().subscribe(_ => this.getEmployes(), err => console.log(err));
    console.log(row);
  }

  openNewEmployeeDialog() {
    const dialogRef = this.dialog.open(EmployeeNewDialogComponent);
    dialogRef.afterClosed().subscribe(_ => this.getEmployes(), err => console.log(err));
  }
}
