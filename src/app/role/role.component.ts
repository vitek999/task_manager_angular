import { Component, OnInit } from '@angular/core';
import {Role} from '../model/role';
import {RoleService} from '../service/role.service';
import {MatDialog} from '@angular/material';
import {RoleNewDialogComponent} from '../role-new-dialog/role-new-dialog.component';
import {RoleInfoDialogComponent} from '../role-info-dialog/role-info-dialog.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  dataSource: Role[] = [];
  displayedColumns: string[] = ['id', 'name'];

  constructor(private roleService: RoleService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getRoles();
  }

  selectRow(row) {
    const dialogRef = this.dialog.open(RoleInfoDialogComponent, {
      data : row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed`); // Pizza!
      this.getRoles();
    });

    console.log(row);
  }

  getRoles(): void {
    this.roleService.getRoles().subscribe(data => {
      this.dataSource = data;
    }, error => {
      console.log(error);
    });
  }

  openNewRoleDialog(): void {
    const dialogRef = this.dialog.open(RoleNewDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed`); // Pizza!
      this.getRoles();
    });
  }
}
