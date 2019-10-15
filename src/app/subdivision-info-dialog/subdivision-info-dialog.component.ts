import {Component, Inject, OnInit} from '@angular/core';
import {Subdivision} from '../model/subdivision';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Company} from '../model/company';
import {CompanyService} from '../service/company.service';
import {SubdivisionService} from '../service/subdivision.service';

@Component({
  selector: 'app-subdivision-info-dialog',
  templateUrl: './subdivision-info-dialog.component.html',
  styleUrls: ['./subdivision-info-dialog.component.css']
})
export class SubdivisionInfoDialogComponent implements OnInit {
  isUsedError: boolean;
  errorMessage: string;
  item: Subdivision;
  companies: Company[];

  constructor(public dialogRef: MatDialogRef<SubdivisionInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Subdivision,
              private companyService: CompanyService,
              private subdivisionService: SubdivisionService) {
    this.item = data;
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(data => this.companies = data, error => console.log(error));
  }

  onClose() {
    this.dialogRef.close();
  }

  delete() {
    this.subdivisionService.deleteSubdivision(this.item.id).subscribe(_ => this.onClose(), error => {
      console.log(error);
      if (error.status === 409) {
        this.isUsedError = true;
        this.errorMessage = 'Ошибка: этот объект используется \n в другом объект';
      }
    });
  }

  update() {
    this.subdivisionService.updateSubdivision(this.item).subscribe(_ => this.onClose(), error => console.log(error));
  }
}
