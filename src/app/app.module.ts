import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';



import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DatatableComponent } from './components/datatable/datatable.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { StackedBarChartComponent } from './components/dashboard/stacked-bar-chart/stacked-bar-chart.component';
import { PieChartComponent } from './components/dashboard/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/dashboard/line-chart/line-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogBoxComponent } from './components/datatable/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    SidenavComponent,
    DashboardComponent,
    DatatableComponent,
    FileUploadComponent,
    StackedBarChartComponent,
    PieChartComponent,
    LineChartComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    NgbModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
