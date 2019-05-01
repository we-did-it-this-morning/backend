import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class FormManagerService {

  public displayMessage:boolean=false;
  public mesage:string;
  constructor(private http: HttpClient) { }
  doApiCall(token,obj,type)
  {
    return this.http.post("http://infmalariapp.herokuapp.com/"+type+"?token="+token,obj).subscribe((response)=>{
      this.mesage="Operation Succesfully executed";
      this.displayMessage = true;
    },(err)=>
    {
      this.mesage="An error occured while executing operation";
      this.displayMessage = false;
    });
  }
  getList(listname)
  {
    return this.http.get("http://infmalariapp.herokuapp.com/"+listname);
  }
  // getTreatments()
  // {
  //   return this.http.get("http://infmalariapp.herokuapp.com/treatments");
  // }
  // getPreventions()
  // {
  //   return this.http.get("http://infmalariapp.herokuapp.com/preventions");
  // }
  // getSeverities()
  // {
  //   return this.http.get("http://infmalariapp.herokuapp.com/severities");
  // }
  // getSymptoms()
  // {
  //   return this.http.get("http://infmalariapp.herokuapp.com/symptoms");
  // }
  // getMalaria()
  // {
  //   return this.http.get("http://infmalariapp.herokuapp.com/malaria-types");
  // }
  // getSymptomTypes()
  // {
  //   return this.http.get("http://infmalariapp.herokuapp.com/symptom-types");
  // }
  // getTreatmentTypes()
  // {
  //   return this.http.get("http://infmalariapp.herokuapp.com/treatment-types");
  // }
}
