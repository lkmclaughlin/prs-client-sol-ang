import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseurl: string="http://localhost:4242/api/users";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<User[]> {
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;
  }
  
  get(id: number): Observable<User> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }
  
  login(username: string, password: string): Observable<User> {
    return this.http.get(`${this.baseurl}/login/${username}/${password}`) as Observable<User>;
  }
  
  add(user: User): Observable<User> {
    return this.http.post(`${this.baseurl}`, user) as Observable<User>;
  }

  edit(user: User): Observable<any> {
    return this.http.put(`${this.baseurl}/${user.id}`, user) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }

}
