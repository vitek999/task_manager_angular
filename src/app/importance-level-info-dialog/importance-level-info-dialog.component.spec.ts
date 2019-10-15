import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanceLevelInfoDialogComponent } from './importance-level-info-dialog.component';

describe('ImportanceLevelInfoDialogComponent', () => {
  let component: ImportanceLevelInfoDialogComponent;
  let fixture: ComponentFixture<ImportanceLevelInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportanceLevelInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanceLevelInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
