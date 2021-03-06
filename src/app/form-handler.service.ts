import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class FormHandlerService {

  constructor(private http: HttpClient,private loginService : LoginService) { }
  public displayMessage:boolean=false;
  public mesage:string;
  //Retrieve the relevant data to display.
  getList(listname)
  {
    return this.http.get("http://infmalariapp.herokuapp.com/"+listname);
  }
  doApiCall(obj,type)
  {
    obj.token = this.loginService.getToken();
    
    return this.http.post("http://infmalariapp.herokuapp.com/"+type,obj).subscribe((response)=>{
      this.mesage="Operation Succesfully executed";
      this.displayMessage = true;
    },(err)=>
    {
      this.mesage="An error occured while executing operation";
      this.displayMessage = false;
    });
  }
}
