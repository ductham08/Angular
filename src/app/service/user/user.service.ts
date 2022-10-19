import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpclient:HttpClient
  ) { }

  // urlApi_user = " http://localhost:3000/users";
  // urlApi = " http://localhost:3000";
  urlApi_user = "https://ljh7zm-8080.preview.csb.app/api/users";
  urlApi = "https://ljh7zm-8080.preview.csb.app";

  signup(users: any):Observable<Iuser>{
    return this.httpclient.post<Iuser>(`${this.urlApi}/signup`, users)
  }

  signin(users: any):Observable<any>{
    return this.httpclient.post<any>(`${this.urlApi}/signin`, users)
  }
}
