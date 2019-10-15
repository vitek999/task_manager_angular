import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdivisionInfoDialogComponent } from './subdivision-info-dialog.component';

describe('SubdivisionInfoDialogComponent', () => {
  let component: SubdivisionInfoDialogComponent;
  let fixture: ComponentFixture<SubdivisionInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdivisionInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdivisionInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
