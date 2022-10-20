import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Iproduct } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // urlApi_product = " http://localhost:3000/products";
  // urlApi_product = "https://json-server-sandy.vercel.app/api/products"; //vercel 
  // urlApi_product = "https://json-server-sandy.vercel.app/api/products"; //vercel anh Dinh 
  // urlApi_product = "https://63387aa9937ea77bfdc0bbea.mockapi.io/products"; //mockapi
  urlApi_product = "https://u7rvhh-8080.preview.csb.app/api/products"; //codesanbox

  constructor(private httpclient:HttpClient) { 
  }

  get_All_Products ():Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(this.urlApi_product)
  }

  get_Top_product_by_order(limit:number):Observable<Iproduct[]>{
    // return this.httpclient.get<Iproduct[]>(`${this.urlApi_product}?page=1&limit=${limit}`) //mockApi
    return this.httpclient.get<Iproduct[]>(`${this.urlApi_product}?_sort=order&_order=desc&_limit=${limit}`) //vercel
  }

  get_New_product(limit:number):Observable<Iproduct[]>{
    // return this.httpclient.get<Iproduct[]>(`${this.urlApi_product}?_sort=createAt&_order=desc&_limit=${limit}`)  //mockApi
    return this.httpclient.get<Iproduct[]>(`${this.urlApi_product}?_sort=createAt&_order=desc&_limit=${limit}`) //vercel
  } 

  get_Product(id: Number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${this.urlApi_product}/${id}`)
  }

  add_Product(product:any):Observable<Iproduct>{
    return this.httpclient.post<Iproduct>(this.urlApi_product,product)
  }

  remove_Product(id:Number):Observable<Iproduct>{
    return this.httpclient.delete<Iproduct>(`${this.urlApi_product}/${id}`)
  }
  search_Product(textSearch:any):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${this.urlApi_product}?q=${textSearch}`)
  }

  


  


}
