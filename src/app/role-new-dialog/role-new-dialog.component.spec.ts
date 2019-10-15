import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleNewDialogComponent } from './role-new-dialog.component';

describe('RoleNewDialogComponent', () => {
  let component: RoleNewDialogComponent;
  let fixture: ComponentFixture<RoleNewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleNewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
