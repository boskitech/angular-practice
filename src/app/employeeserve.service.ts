import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserveService {

  private _url: string = "/assets/data/employees.json"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
