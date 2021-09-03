import { EmployeeserveService } from './employeeserve.service';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnrollformComponent } from './enrollform/enrollform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BmiComponent } from './bmi/bmi.component';
import { ReactiveprogramComponent } from './reactiveprogram/reactiveprogram.component';
import { EmployeeComponent } from './employee/employee.component';
import { PagenotfoungComponent } from './pagenotfoung/pagenotfoung.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InterpolationComponent,
    EnrollformComponent,
    ReactiveFormComponent,
    BmiComponent,
    ReactiveprogramComponent,
    EmployeeComponent,
    PagenotfoungComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
