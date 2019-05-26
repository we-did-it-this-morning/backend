import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  token = null;
  
  constructor(private http : HttpClient) { }

  login(){
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    return this.http.post('http://localhost:3000/log-in',{username: "admin",password: "1234"},{headers : headers});
   }

   storeToken(_token){
    this.token = _token;
    this.isLoggedIn = true;   
   }

   getToken(){
     return this.token;
   }
}
