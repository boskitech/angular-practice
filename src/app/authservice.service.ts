import { baseUrl } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
  login(data: any):Observable<any>{
    return this.http.post(`${baseUrl}users/login`, data)
  }
}
