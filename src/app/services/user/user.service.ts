import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL_API = Constants.URL;

  constructor(private http:HttpClient) { }

  register(body:any) {
    return this.http.post(Constants.URL + 'users/register', body, {
      observe:'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body:any) {
    console.log('Sending: ', body);
    return this.http.post(Constants.URL + 'login', body, {
      observe:'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  logout() {
    return this.http.get(Constants.URL + 'users/logout', {
      observe:'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  
}
