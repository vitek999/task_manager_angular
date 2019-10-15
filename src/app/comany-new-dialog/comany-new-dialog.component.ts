import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {CompanyService} from '../service/company.service';

@Component({
  selector: 'app-comany-new-dialog',
  templateUrl: './comany-new-dialog.component.html',
  styleUrls: ['./comany-new-dialog.component.css']
})
export class ComanyNewDialogComponent {

  companyName: string;

  constructor(
    public dialogRef: MatDialogRef<ComanyNewDialogComponent>,
    private companyService: CompanyService
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  create(): void {
    console.log(this.companyName);
    this.companyService.newCompany(this.companyName).subscribe(data => {
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }
}
