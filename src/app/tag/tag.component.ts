import { Component, OnInit } from '@angular/core';
import {TagService} from '../service/tag.service';
import {MatDialog} from '@angular/material';
import {Tag} from '../model/tag';
import {TagInfoDialogComponent} from '../tag-info-dialog/tag-info-dialog.component';
import {TagNewDialogComponent} from '../tag-new-dialog/tag-new-dialog.component';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  dataSource: Tag[] = [];
  displayedColumns: string[] = ['id', 'name'];

  constructor(private tagService: TagService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getTags();
  }

  selectRow(row) {
    const dialogRef = this.dialog.open(TagInfoDialogComponent, {
      data : row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed`); // Pizza!
      this.getTags();
    });
    console.log(row);
  }

  getTags() {
    this.tagService.getTags().subscribe(data => {
      this.dataSource = data;
    }, error => {
      console.log(error);
    });
  }

  openNewTagDialog(): void {
    const dialogRef = this.dialog.open(TagNewDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed`); // Pizza!
      this.getTags();
    });
  }
}
