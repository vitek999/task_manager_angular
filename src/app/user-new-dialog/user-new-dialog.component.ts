import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {MatDialogRef} from '@angular/material';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-new-dialog',
  templateUrl: './user-new-dialog.component.html',
  styleUrls: ['./user-new-dialog.component.css']
})
export class UserNewDialogComponent implements OnInit {
  item: User = {id: 0, firstName: '', lastName: '', patronymic: '', email: '', password: ''};

  constructor(
    public dialogRef: MatDialogRef<UserNewDialogComponent>,
    private companyService: UserService
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  create() {
    this.companyService.newUser(this.item).subscribe(_ => this.onClose(), error => console.log(error));
  }
}
