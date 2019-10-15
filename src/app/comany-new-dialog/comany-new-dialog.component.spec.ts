import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanyNewDialogComponent } from './comany-new-dialog.component';

describe('ComanyNewDialogComponent', () => {
  let component: ComanyNewDialogComponent;
  let fixture: ComponentFixture<ComanyNewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComanyNewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComanyNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
