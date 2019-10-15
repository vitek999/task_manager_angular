import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdivisionNewDialogComponent } from './subdivision-new-dialog.component';

describe('SubdivisionNewDialogComponent', () => {
  let component: SubdivisionNewDialogComponent;
  let fixture: ComponentFixture<SubdivisionNewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdivisionNewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdivisionNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
