import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { CompanyComponent } from './company/company.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ComanyNewDialogComponent } from './comany-new-dialog/comany-new-dialog.component';
import {FormsModule} from '@angular/forms';
import { CompanyInfoDialogComponent } from './company-info-dialog/company-info-dialog.component';
import { RoleComponent } from './role/role.component';
import { RoleNewDialogComponent } from './role-new-dialog/role-new-dialog.component';
import { RoleInfoDialogComponent } from './role-info-dialog/role-info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ComanyNewDialogComponent,
    CompanyInfoDialogComponent,
    RoleComponent,
    RoleNewDialogComponent,
    RoleInfoDialogComponent
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
    MatInputModule
  ],
  entryComponents: [
    ComanyNewDialogComponent,
    CompanyInfoDialogComponent,
    RoleNewDialogComponent,
    RoleInfoDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  static url = 'http://localhost:8080/company/';
}
