import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusNewDialogComponent } from './status-new-dialog.component';

describe('StatusNewDialogComponent', () => {
  let component: StatusNewDialogComponent;
  let fixture: ComponentFixture<StatusNewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusNewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
