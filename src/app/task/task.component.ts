import { Component, OnInit } from '@angular/core';
import {TaskService} from '../service/task.service';
import {MatDialog} from '@angular/material';
import {Task} from '../model/Task';
import {EmployeeInfoDialogComponent} from '../employee-info-dialog/employee-info-dialog.component';
import {TaskInfoDialogComponent} from '../task-info-dialog/task-info-dialog.component';
import {TaskNewDialogComponent} from '../task-new-dialog/task-new-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  dataSource: Task[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'employeeId', 'importanceLevelId', 'statusId', 'startDate', 'endDate'];

  constructor(private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getTasks();
  }

  selectRow(row) {
    const dialogRef = this.dialog.open(TaskInfoDialogComponent, {data: row});
    dialogRef.afterClosed().subscribe(_ => this.getTasks(), err => console.log(err));
    console.log(row);
  }

  getTasks() {
    this.taskService.getTask().subscribe(data => this.dataSource = data, error => console.log(error));
  }

  openNewTaskDialog() {
    const dialogRef = this.dialog.open(TaskNewDialogComponent);
    dialogRef.afterClosed().subscribe(_ => this.getTasks(), err => console.log(err));
  }
}
