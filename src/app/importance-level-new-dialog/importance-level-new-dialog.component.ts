import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ImportanceLevelService} from '../service/importance-level.service';

@Component({
  selector: 'app-importance-level-new-dialog',
  templateUrl: './importance-level-new-dialog.component.html',
  styleUrls: ['./importance-level-new-dialog.component.css']
})
export class ImportanceLevelNewDialogComponent implements OnInit {
  itemName: string;

  constructor(public dialogRef: MatDialogRef<ImportanceLevelNewDialogComponent>,
              private importanceLevelService: ImportanceLevelService) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  create() {
    this.importanceLevelService.newImportanceLevel({id: 0, name: this.itemName}).subscribe(_ => this.onClose(),
      error => console.log(error));
  }
}
