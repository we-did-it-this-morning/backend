import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  token = null;
  
  constructor(private http : HttpClient) { }

  login(_username,_password){
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    return this.http.post('http://infmalariapp.herokuapp.com/log-in',{username: _username,password: _password},{headers : headers});
   }

   storeToken(_token){
    this.token = _token;
    this.isLoggedIn = true;   
   }

   getToken(){
     return this.token;
   }
}
