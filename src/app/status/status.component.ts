import { Component, OnInit } from '@angular/core';
import {Status} from '../model/status';
import {StatusService} from '../service/status.service';
import {MatDialog} from '@angular/material';
import {StatusInfoDialogComponent} from '../status-info-dialog/status-info-dialog.component';
import {StatusNewDialogComponent} from '../status-new-dialog/status-new-dialog.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  dataSource: Status[] = [{id: 0, name: 'asd', description: 'asd'}];
  displayedColumns: string[] = ['id', 'name', 'description'];

  constructor(private statusService: StatusService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getStatuses();
  }

  getStatuses() {
    this.statusService.getStatuses().subscribe(data => {
      this.dataSource = data;
    }, error => {
      console.log(error);
    });
  }

  selectRow(row) {
    const dialogRef = this.dialog.open(StatusInfoDialogComponent, {
      data : row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed`); // Pizza!
      this.getStatuses();
    });

    console.log(row);
  }

  openNewStatusDialog() {
    const dialogRef = this.dialog.open(StatusNewDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed`); // Pizza!
      this.getStatuses();
    });
  }
}
