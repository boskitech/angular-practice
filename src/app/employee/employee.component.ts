import { EmployeeserveService } from './../employeeserve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: any = [];

  constructor(private _employeeservice: EmployeeserveService) { }

  ngOnInit(): void {
    this._employeeservice.getEmployees().subscribe(data => this.employees = data);
  }

}
