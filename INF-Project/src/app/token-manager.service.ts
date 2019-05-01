import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  private tokenKey:string = 'app_token';
  constructor() { }

  //Receive a String
  store(content:Object) 
  {
    if(content["token"]!='')
    {
      localStorage.setItem(this.tokenKey,  content.toString() );
    }
  }

  //Retrieve the token for usage
  retrieve() 
  {
      let storedToken = localStorage.getItem(this.tokenKey);
      if(!storedToken)
      {
        throw 'no token found.Please login';
      } 
      return storedToken
  }
  logout()
  {
    localStorage.removeItem(this.tokenKey);

  }
  checkTokenSet()
  {
    if(localStorage.getItem(this.tokenKey)!= null)
    {
      return true;
    }
    
    return false;
  }
}