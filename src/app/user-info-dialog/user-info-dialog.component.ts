import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../model/user';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-info-dialog',
  templateUrl: './user-info-dialog.component.html',
  styleUrls: ['./user-info-dialog.component.css']
})
export class UserInfoDialogComponent implements OnInit {
  isUsedError: boolean;
  errorMessage: string;
  item: User;

  constructor(public dialogRef: MatDialogRef<UserInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              private userService: UserService) {
    this.item = data;
  }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  delete() {
    this.userService.deleteUser(this.item.id).subscribe(data => {
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
    this.userService.updateUser(this.item).subscribe(_ => this.onClose(), error => console.log(error));
  }
}
