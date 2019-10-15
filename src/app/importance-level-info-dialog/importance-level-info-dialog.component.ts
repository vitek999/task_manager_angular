import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ImportanceLevelService} from '../service/importance-level.service';
import {ImportanceLevel} from '../model/importance-level';

@Component({
  selector: 'app-importance-level-info-dialog',
  templateUrl: './importance-level-info-dialog.component.html',
  styleUrls: ['./importance-level-info-dialog.component.css']
})
export class ImportanceLevelInfoDialogComponent implements OnInit {

  item: ImportanceLevel;
  isUsedError: boolean;
  errorMessage: string;

  constructor(public dialogRef: MatDialogRef<ImportanceLevelInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ImportanceLevel,
              private importanceLevelService: ImportanceLevelService) {
    this.item = data;
  }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  delete() {
    this.importanceLevelService.deleteImportanceLevelId(this.item.id).subscribe(_ => this.onClose(),
        error => {
          console.log(error);
          if (error.status === 409) {
            this.isUsedError = true;
            this.errorMessage = 'Ошибка: этот объект используется \n в другом объект';
          }
        });
  }

  update() {
    this.importanceLevelService.updateImportanceLevel(this.item).subscribe(_ => this.onClose(),
      error => console.log(error));
  }
}
