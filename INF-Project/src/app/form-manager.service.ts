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
  getCountries()
  {
    return this.http.get("http://infmalariapp.herokuapp.com/countries");
  }
  getTreatments()
  {
    return this.http.get("http://infmalariapp.herokuapp.com/treatments");
  }
  getPreventions()
  {
    return this.http.get("http://infmalariapp.herokuapp.com/preventions");
  }
  getSeverities()
  {
    return this.http.get("http://infmalariapp.herokuapp.com/severities");
  }
  getSymptoms()
  {
    return this.http.get("http://infmalariapp.herokuapp.com/symptoms");
  }
  getMalaria()
  {
    return this.http.get("http://infmalariapp.herokuapp.com/malaria-types");
  }
}
