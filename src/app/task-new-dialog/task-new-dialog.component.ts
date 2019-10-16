import { Component, OnInit } from '@angular/core';
import {Task} from '../model/Task';
import {MatDialogRef} from '@angular/material';
import {TaskService} from '../service/task.service';
import {EmployeeService} from '../service/employee.service';
import {ImportanceLevelService} from '../service/importance-level.service';
import {StatusService} from '../service/status.service';
import {Employee} from '../model/employee';
import {ImportanceLevel} from '../model/importance-level';
import {Status} from '../model/status';

@Component({
  selector: 'app-task-new-dialog',
  templateUrl: './task-new-dialog.component.html',
  styleUrls: ['./task-new-dialog.component.css']
})
export class TaskNewDialogComponent implements OnInit {
  item: Task = {id: 0, name: '', description: '', statusId: 0, importanceLevelId: 0, employeeId: 0, startDate: '', endDate: ''};
  employes: Employee[];
  importanceLevels: ImportanceLevel[];
  statuses: Status[];

  constructor(public dialogRef: MatDialogRef<TaskNewDialogComponent>,
              private taskService: TaskService,
              private employeeService: EmployeeService,
              private importanceLevelService: ImportanceLevelService,
              private statusService: StatusService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => this.employes = data, error => console.log(error));
    this.importanceLevelService.getImportanceLevels().subscribe(data => this.importanceLevels = data, error => console.log(error));
    this.statusService.getStatuses().subscribe(data => this.statuses = data, error => console.log(error));
  }

  onClose() {
    this.dialogRef.close();
  }

  create() {
    this.taskService.newTask(this.item).subscribe(_ => this.onClose(), error => console.log(error));
  }
}
