import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanceLevelNewDialogComponent } from './importance-level-new-dialog.component';

describe('ImportanceLevelNewDialogComponent', () => {
  let component: ImportanceLevelNewDialogComponent;
  let fixture: ComponentFixture<ImportanceLevelNewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportanceLevelNewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanceLevelNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
