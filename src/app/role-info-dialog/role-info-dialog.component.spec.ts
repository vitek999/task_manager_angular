import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleInfoDialogComponent } from './role-info-dialog.component';

describe('RoleInfoDialogComponent', () => {
  let component: RoleInfoDialogComponent;
  let fixture: ComponentFixture<RoleInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
