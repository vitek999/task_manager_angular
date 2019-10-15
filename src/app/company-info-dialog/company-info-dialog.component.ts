import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Company} from '../model/company';
import {CompanyService} from '../service/company.service';

@Component({
  selector: 'app-company-info-dialog',
  templateUrl: './company-info-dialog.component.html',
  styleUrls: ['./company-info-dialog.component.css']
})
export class CompanyInfoDialogComponent {

  item: Company;
  isUsedError: boolean;
  errorMessage: string;

  constructor(public dialogRef: MatDialogRef<CompanyInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Company,
              private companyService: CompanyService) {
    this.item = data;
  }

  delete(): void {
    this.companyService.deleteCompany(this.item.id).subscribe(data => {
      this.onClose();
    }, error => {
      console.log(error);
      if (error.status === 409) {
        this.isUsedError = true;
        this.errorMessage = 'Ошибка: этот объект используется \n в другом объект';
      }
    });
  }

  update(): void {
    this.companyService.updateCompany(this.item).subscribe(data => {
      this.onClose();
    }, error => {
      console.log(error);
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
