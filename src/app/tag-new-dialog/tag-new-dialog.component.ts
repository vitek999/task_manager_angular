import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {TagService} from '../service/tag.service';

@Component({
  selector: 'app-tag-new-dialog',
  templateUrl: './tag-new-dialog.component.html',
  styleUrls: ['./tag-new-dialog.component.css']
})
export class TagNewDialogComponent {
  tagName: string;

  constructor(
    public dialogRef: MatDialogRef<TagNewDialogComponent>,
    private tagService: TagService
  ) {
  }

  onClose() {
    this.dialogRef.close();
  }

  create() {
    console.log(this.tagName);
    this.tagService.newTag({id: 0, name: this.tagName}).subscribe(data => {
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }
}
