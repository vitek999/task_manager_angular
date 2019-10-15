import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNewDialogComponent } from './employee-new-dialog.component';

describe('EmployeeNewDialogComponent', () => {
  let component: EmployeeNewDialogComponent;
  let fixture: ComponentFixture<EmployeeNewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeNewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
