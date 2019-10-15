import { Component, OnInit } from '@angular/core';
import {Subdivision} from '../model/subdivision';
import {Company} from '../model/company';
import {MatDialogRef} from '@angular/material';
import {CompanyService} from '../service/company.service';
import {SubdivisionService} from '../service/subdivision.service';

@Component({
  selector: 'app-subdivision-new-dialog',
  templateUrl: './subdivision-new-dialog.component.html',
  styleUrls: ['./subdivision-new-dialog.component.css']
})
export class SubdivisionNewDialogComponent implements OnInit {
  item: Subdivision = {id: 0, name: '', description: '', companyId: 0};
  companies: Company[];

  constructor(public dialogRef: MatDialogRef<SubdivisionNewDialogComponent>,
              private companyService: CompanyService,
              private subdivisionService: SubdivisionService) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(data => this.companies = data, error => console.log(error));
  }

  onClose() {
    this.dialogRef.close();
  }

  create() {
    this.subdivisionService.newSubdivision(this.item).subscribe(_ => this.onClose(), error => console.log(error));
  }
}
