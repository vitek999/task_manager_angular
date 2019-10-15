import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagInfoDialogComponent } from './tag-info-dialog.component';

describe('TagInfoDialogComponent', () => {
  let component: TagInfoDialogComponent;
  let fixture: ComponentFixture<TagInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
