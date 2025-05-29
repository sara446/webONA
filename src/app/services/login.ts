import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  apiUri = '/api/login';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  getAllLoginData(): Observable<any> {
    return this.http.get<any>(this.apiUri)
  }


}
