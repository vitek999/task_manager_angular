import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {MatDialog} from '@angular/material';
import {UserInfoDialogComponent} from '../user-info-dialog/user-info-dialog.component';
import {UserNewDialogComponent} from '../user-new-dialog/user-new-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dataSource: User[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'patronymic', 'email', 'password'];

  constructor(private userService: UserService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => this.dataSource = data, error => console.log(error));
  }

  selectRow(row) {
    const dialogRef = this.dialog.open(UserInfoDialogComponent, {
      data: row
    });

    dialogRef.afterClosed().subscribe(_ => {
      console.log(`Dialog closed`); // Pizza!
      this.getUsers();
    });
  }

  openNewUserDialog() {
    const dialogRef = this.dialog.open(UserNewDialogComponent);
    dialogRef.afterClosed().subscribe(_ => this.getUsers());
  }
}
