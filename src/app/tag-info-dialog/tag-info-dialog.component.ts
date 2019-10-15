import {Component, Inject, OnInit} from '@angular/core';
import {Tag} from '../model/tag';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TagService} from '../service/tag.service';

@Component({
  selector: 'app-tag-info-dialog',
  templateUrl: './tag-info-dialog.component.html',
  styleUrls: ['./tag-info-dialog.component.css']
})
export class TagInfoDialogComponent implements OnInit {

  item: Tag;
  isUsedError: boolean;
  errorMessage: string;

  constructor(public dialogRef: MatDialogRef<TagInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Tag,
              private tagService: TagService) {
    this.item = data;
  }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  delete() {
    this.tagService.deleteTag(this.item.id).subscribe(data => {
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
    this.tagService.updateTag(this.item).subscribe(data => {
      this.onClose();
    }, error => {
      console.log(error);
    });
  }
}
