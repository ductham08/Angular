import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategories } from 'src/app/model/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  urlApi_categories = "https://json-server-sandy.vercel.app/api/categories"; //codesanbox

  constructor(private httpclient: HttpClient) { }

  get_All_Categories(): Observable<Icategories[]> {
    return this.httpclient.get<Icategories[]>(this.urlApi_categories)
  }
  get_Categories(id: Number): Observable<Icategories[]> {
    return this.httpclient.get<Icategories[]>(`${this.urlApi_categories}/${id}`)
  }

  get_Product_by_category(): Observable<Icategories[]> {
    return this.httpclient.get<Icategories[]>(`${this.urlApi_categories}/?_embed=products`)
  }

  get_Product_by_IdCategory(id_cate: Number): Observable<Icategories[]> {
    return this.httpclient.get<Icategories[]>(`${this.urlApi_categories}/${id_cate}?_embed=products`)
  }

  add_Category(category: any): Observable<Icategories[]> {
    return this.httpclient.post<Icategories[]>(this.urlApi_categories, category)
  }
  edit_Category(id: Number, category: any): Observable<Icategories[]> {
    return this.httpclient.patch<Icategories[]>(`${this.urlApi_categories}/${id}`, category)
  }

  remove_Category(id: Number): Observable<Icategories> {
    return this.httpclient.delete<Icategories>(`${this.urlApi_categories}/${id}`)
  }
}
