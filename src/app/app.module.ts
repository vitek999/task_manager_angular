import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {CompanyComponent} from './company/company.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {ComanyNewDialogComponent} from './comany-new-dialog/comany-new-dialog.component';
import {FormsModule} from '@angular/forms';
import {CompanyInfoDialogComponent} from './company-info-dialog/company-info-dialog.component';
import {RoleComponent} from './role/role.component';
import {RoleNewDialogComponent} from './role-new-dialog/role-new-dialog.component';
import {RoleInfoDialogComponent} from './role-info-dialog/role-info-dialog.component';
import {TagComponent} from './tag/tag.component';
import {TagNewDialogComponent} from './tag-new-dialog/tag-new-dialog.component';
import {TagInfoDialogComponent} from './tag-info-dialog/tag-info-dialog.component';
import {StatusComponent} from './status/status.component';
import {StatusNewDialogComponent} from './status-new-dialog/status-new-dialog.component';
import {StatusInfoDialogComponent} from './status-info-dialog/status-info-dialog.component';
import { ImportanceLevelComponent } from './importance-level/importance-level.component';
import { ImportanceLevelNewDialogComponent } from './importance-level-new-dialog/importance-level-new-dialog.component';
import { ImportanceLevelInfoDialogComponent } from './importance-level-info-dialog/importance-level-info-dialog.component';
import { UserComponent } from './user/user.component';
import { UserInfoDialogComponent } from './user-info-dialog/user-info-dialog.component';
import { UserNewDialogComponent } from './user-new-dialog/user-new-dialog.component';
import { SubdivisionComponent } from './subdivision/subdivision.component';
import { SubdivisionNewDialogComponent } from './subdivision-new-dialog/subdivision-new-dialog.component';
import { SubdivisionInfoDialogComponent } from './subdivision-info-dialog/subdivision-info-dialog.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeNewDialogComponent } from './employee-new-dialog/employee-new-dialog.component';
import { EmployeeInfoDialogComponent } from './employee-info-dialog/employee-info-dialog.component';
import { TaskComponent } from './task/task.component';
import { TaskInfoDialogComponent } from './task-info-dialog/task-info-dialog.component';
import { TaskNewDialogComponent } from './task-new-dialog/task-new-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ComanyNewDialogComponent,
    CompanyInfoDialogComponent,
    RoleComponent,
    RoleNewDialogComponent,
    RoleInfoDialogComponent,
    TagComponent,
    TagNewDialogComponent,
    TagInfoDialogComponent,
    StatusComponent,
    StatusNewDialogComponent,
    StatusInfoDialogComponent,
    ImportanceLevelComponent,
    ImportanceLevelNewDialogComponent,
    ImportanceLevelInfoDialogComponent,
    UserComponent,
    UserInfoDialogComponent,
    UserNewDialogComponent,
    SubdivisionComponent,
    SubdivisionNewDialogComponent,
    SubdivisionInfoDialogComponent,
    EmployeeComponent,
    EmployeeNewDialogComponent,
    EmployeeInfoDialogComponent,
    TaskComponent,
    TaskInfoDialogComponent,
    TaskNewDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [
    ComanyNewDialogComponent,
    CompanyInfoDialogComponent,
    RoleNewDialogComponent,
    RoleInfoDialogComponent,
    TagNewDialogComponent,
    TagInfoDialogComponent,
    StatusNewDialogComponent,
    StatusInfoDialogComponent,
    ImportanceLevelNewDialogComponent,
    ImportanceLevelInfoDialogComponent,
    UserInfoDialogComponent,
    UserNewDialogComponent,
    SubdivisionNewDialogComponent,
    SubdivisionInfoDialogComponent,
    EmployeeNewDialogComponent,
    EmployeeInfoDialogComponent,
    TaskInfoDialogComponent,
    TaskNewDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  static url = 'http://localhost:8080/company/';
}
