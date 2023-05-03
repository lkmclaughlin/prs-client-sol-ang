import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})

export class VendorService {

  baseurl: string="http://localhost:4242/api/vendors";
  
  constructor(
    private http: HttpClient

  ) { }

  list(): Observable<Vendor[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>;
  }
  
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }

  add(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${this.baseurl}`, vendor) as Observable<Vendor>;
  }

  edit(vendor: Vendor): Observable<any> {
    return this.http.put(`${this.baseurl}/${vendor.id}`, vendor) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }

}
