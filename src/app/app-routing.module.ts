import { CalculatorComponent } from './calculator/calculator.component';
import { PagenotfoungComponent } from './pagenotfoung/pagenotfoung.component';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReactiveprogramComponent } from './reactiveprogram/reactiveprogram.component';
import { BmiComponent } from './bmi/bmi.component';
import { EnrollformComponent } from './enrollform/enrollform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'interpolation', component:InterpolationComponent},
  {path:'reactiveforms', component:ReactiveFormComponent},
  {path:'enroll', component:EnrollformComponent},
  {path:'bmi', component:BmiComponent},
  {path:'formval', component:ReactiveprogramComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'calculator', component:CalculatorComponent},
  {path:"**", component:PagenotfoungComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
