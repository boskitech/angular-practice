import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private _http:HttpClient) { }

  _url = "http://localhost:3000/users";
  delete_url = "http://localhost:3000/users/";

  createuser(user: any){
    return this._http.post(this._url, user);
  }

  getAllUser(){
    return this._http.get(this._url); 
  }


  updateUser(user: any){
    return this._http.put(this.delete_url + user.id, user);
  }

  deleteUser(user: any){
    return this._http.delete(this.delete_url + user.id);
  }
}
