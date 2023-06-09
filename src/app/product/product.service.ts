import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseurl: string="http://localhost:4242/api/products";
  
  constructor(
    private http: HttpClient

  ) { }

  list(): Observable<Product[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Product[]>;
  }
  
  get(id: number): Observable<Product> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>;
  }

  add(product: Product): Observable<Product> {
    return this.http.post(`${this.baseurl}`, product) as Observable<Product>;
  }

  edit(product: Product): Observable<any> {
    return this.http.put(`${this.baseurl}/${product.id}`, product) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }

}
