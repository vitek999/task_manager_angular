import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {RoleService} from '../service/role.service';

@Component({
  selector: 'app-role-new-dialog',
  templateUrl: './role-new-dialog.component.html',
  styleUrls: ['./role-new-dialog.component.css']
})
export class RoleNewDialogComponent {

  roleName: string;

  constructor(
    public dialogRef: MatDialogRef<RoleNewDialogComponent>,
    private roleService: RoleService
  ) {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  create(): void {
    console.log(this.roleName);
    this.roleService.newRole(this.roleName).subscribe(data => {
      this.onClose();
    }, error => console.log(error));
  }
}
