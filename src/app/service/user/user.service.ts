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

  /*Local*/
  // urlApi_user = " http://localhost:3000/users";
  // urlApi = " http://localhost:3000";
  /*Vercel*/
  urlApi_user = "https://json-server-sandy.vercel.app/api/users";
  urlApi = "https://json-server-sandy.vercel.app";
  /*Mockapi*/
  // urlApi_user = "https://63387aa9937ea77bfdc0bbea.mockapi.io/users";
  // urlApi = "https://63387aa9937ea77bfdc0bbea.mockapi.io";


  signup(users: any):Observable<Iuser>{
    return this.httpclient.post<Iuser>(`${this.urlApi}/signup`, users)
  }

  signin(users: any):Observable<any>{
    return this.httpclient.post<any>(`${this.urlApi}/signin`, users)
  }
}
