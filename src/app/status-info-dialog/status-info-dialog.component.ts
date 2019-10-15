import {Component, Inject} from '@angular/core';
import {Status} from '../model/status';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {StatusService} from '../service/status.service';

@Component({
  selector: 'app-status-info-dialog',
  templateUrl: './status-info-dialog.component.html',
  styleUrls: ['./status-info-dialog.component.css']
})
export class StatusInfoDialogComponent{

  item: Status;
  isUsedError: boolean;
  errorMessage: string;

  constructor(public dialogRef: MatDialogRef<StatusInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Status,
              private statusService: StatusService) {
    this.item = data;
  }

  onClose() {
    this.dialogRef.close();
  }

  delete() {
    this.statusService.deleteStatus(this.item.id).subscribe(data => {
      this.onClose();
    }, error => {
      console.log(error);
      if (error.status === 409) {
        this.isUsedError = true;
        this.errorMessage = 'Ошибка: этот объект используется в другом объект';
      }
    });
  }

  update() {
    this.statusService.updateStatus(this.item).subscribe(data => {
      this.onClose();
    }, error => {
      console.log(error);
    });
  }
}
