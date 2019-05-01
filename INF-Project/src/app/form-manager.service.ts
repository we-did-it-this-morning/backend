import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class FormManagerService {

  constructor(private http: HttpClient) { }
  doApiCall(token,obj,type)
  {
    return this.http.post("http://infmalariapp.herokuapp.com/"+type+"?token="+token,obj).subscribe((response)=>{

    });
  }
}
