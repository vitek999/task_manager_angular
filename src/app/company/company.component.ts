import { Component, OnInit } from '@angular/core';
import {Company} from '../model/company';
import {CompanyService} from '../service/company.service';
import {MatDialog} from '@angular/material';
import {ComanyNewDialogComponent} from '../comany-new-dialog/comany-new-dialog.component';
import {CompanyInfoDialogComponent} from '../company-info-dialog/company-info-dialog.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  dataSource: Company[] = [
  ];
  displayedColumns: string[] = ['id', 'name'];

  constructor(private companyService: CompanyService, public dialog: MatDialog) { }

  ngOnInit() {
   this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe(data => {
      this.dataSource = data;
    }, error => {
      console.log(error);
    });
  }

  selectRow(row) {
    const dialogRef = this.dialog.open(CompanyInfoDialogComponent, {
      data : row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed`); // Pizza!
      this.getCompanies();
    });

    console.log(row);
  }

  openNewCompanyDialog(): void {
    const dialogRef = this.dialog.open(ComanyNewDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed`); // Pizza!
      this.getCompanies();
    });
  }

}

