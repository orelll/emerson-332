import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Ec332ThumbnailComponent } from './components/ec332-thumbnail/ec332-thumbnail.component';
import { BasicAuthInterceptor } from './interceptors/basic-auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

const materialModules: any[] = [
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Ec332ThumbnailComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    materialModules
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
