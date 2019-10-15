import { Component, OnInit } from '@angular/core';
import {Subdivision} from '../model/subdivision';
import {SubdivisionService} from '../service/subdivision.service';
import {MatDialog} from '@angular/material';
import {SubdivisionInfoDialogComponent} from '../subdivision-info-dialog/subdivision-info-dialog.component';
import {SubdivisionNewDialogComponent} from '../subdivision-new-dialog/subdivision-new-dialog.component';

@Component({
  selector: 'app-subdivision',
  templateUrl: './subdivision.component.html',
  styleUrls: ['./subdivision.component.css']
})
export class SubdivisionComponent implements OnInit {

  dataSource: Subdivision[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'companyId'];

  constructor(private subdivisionService: SubdivisionService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getSubdivisions();
  }

  openNewSubdivisionDialog() {
    const dialogRef = this.dialog.open(SubdivisionNewDialogComponent);
    dialogRef.afterClosed().subscribe(_ => this.getSubdivisions(), error => console.log(error));
  }

  getSubdivisions() {
    this.subdivisionService.getSubdivisions().subscribe(data => this.dataSource = data, err => console.log(err));
  }

  selectRow(row) {
    const dialogRef = this.dialog.open(SubdivisionInfoDialogComponent, {data: row});
    dialogRef.afterClosed().subscribe(_ => this.getSubdivisions(), err => console.log(err));
    console.log(row);
  }
}
