import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagNewDialogComponent } from './tag-new-dialog.component';

describe('TagNewDialogComponent', () => {
  let component: TagNewDialogComponent;
  let fixture: ComponentFixture<TagNewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagNewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
