import {Component, Inject, OnInit} from '@angular/core';
import {Task} from '../model/Task';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TaskService} from '../service/task.service';
import {EmployeeService} from '../service/employee.service';
import {ImportanceLevelService} from '../service/importance-level.service';
import {StatusService} from '../service/status.service';
import {Employee} from '../model/employee';
import {ImportanceLevel} from '../model/importance-level';
import {Status} from '../model/status';

@Component({
  selector: 'app-task-info-dialog',
  templateUrl: './task-info-dialog.component.html',
  styleUrls: ['./task-info-dialog.component.css']
})
export class TaskInfoDialogComponent implements OnInit {
  isUsedError: boolean;
  errorMessage: string;
  item: Task;
  employes: Employee[];
  importanceLevels: ImportanceLevel[];
  statuses: Status[];

  constructor(public dialogRef: MatDialogRef<TaskInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Task,
              private taskService: TaskService,
              private employeeService: EmployeeService,
              private importanceLevelService: ImportanceLevelService,
              private statusService: StatusService) {
    this.item = data;
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => this.employes = data, error => console.log(error));
    this.importanceLevelService.getImportanceLevels().subscribe(data => this.importanceLevels = data, error => console.log(error));
    this.statusService.getStatuses().subscribe(data => this.statuses = data, error => console.log(error));
  }

  onClose() {
    this.dialogRef.close();
  }

  delete() {
    this.taskService.deleteTask(this.item.id).subscribe(_ => this.onClose(), error => console.log(error));
  }

  update() {
    this.taskService.updateTask(this.item).subscribe(_ => this.onClose(), error => console.log(error));
  }
}
