import {Component, Inject} from '@angular/core';
import {Role} from '../model/role';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RoleService} from '../service/role.service';

@Component({
  selector: 'app-role-info-dialog',
  templateUrl: './role-info-dialog.component.html',
  styleUrls: ['./role-info-dialog.component.css']
})
export class RoleInfoDialogComponent {

  item: Role;
  isUsedError: boolean;
  errorMessage: string;

  constructor(public dialogRef: MatDialogRef<RoleInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Role,
              private roleService: RoleService) {
    this.item = data;
  }

  delete() {
    this.roleService.deleteRole(this.item.id).subscribe(data => {
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
    this.roleService.updateCompany(this.item).subscribe(data => {
      this.onClose();
    }, error => {
      console.log(error);
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
