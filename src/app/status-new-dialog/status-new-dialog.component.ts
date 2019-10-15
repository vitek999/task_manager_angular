import {Component} from '@angular/core';
import {Status} from '../model/status';
import {MatDialogRef} from '@angular/material';
import {StatusService} from '../service/status.service';

@Component({
  selector: 'app-status-new-dialog',
  templateUrl: './status-new-dialog.component.html',
  styleUrls: ['./status-new-dialog.component.css']
})
export class StatusNewDialogComponent {

  item: Status = {id: 0, name: '', description: ''};

  constructor(
    public dialogRef: MatDialogRef<StatusNewDialogComponent>,
    private statusService: StatusService
  ) {
  }


  onClose() {
    this.dialogRef.close();
  }

  create() {
    this.statusService.newStatus(this.item).subscribe(data => {
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }
}
