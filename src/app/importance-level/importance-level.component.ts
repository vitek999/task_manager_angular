import {Component, OnInit} from '@angular/core';
import {ImportanceLevel} from '../model/importance-level';
import {ImportanceLevelService} from '../service/importance-level.service';
import {MatDialog} from '@angular/material';
import {ImportanceLevelInfoDialogComponent} from '../importance-level-info-dialog/importance-level-info-dialog.component';
import {ImportanceLevelNewDialogComponent} from '../importance-level-new-dialog/importance-level-new-dialog.component';

@Component({
  selector: 'app-importance-level',
  templateUrl: './importance-level.component.html',
  styleUrls: ['./importance-level.component.css']
})
export class ImportanceLevelComponent implements OnInit {

  dataSource: ImportanceLevel[] = [];
  displayedColumns: string[] = ['id', 'name'];

  constructor(private importanceLevelService: ImportanceLevelService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getImportanceLevels();
  }

  getImportanceLevels() {
    this.importanceLevelService.getImportanceLevels().subscribe(data => {
      this.dataSource = data;
    }, error => console.log(error));
  }

  selectRow(row) {
    const dialogRef = this.dialog.open(ImportanceLevelInfoDialogComponent, {
      data : row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed`); // Pizza!
      this.getImportanceLevels();
    });

    console.log(row);
  }

  openNewImportanceLevelDialog() {
    const dialogRef = this.dialog.open(ImportanceLevelNewDialogComponent);
    dialogRef.afterClosed().subscribe(_ => this.getImportanceLevels());
  }
}
