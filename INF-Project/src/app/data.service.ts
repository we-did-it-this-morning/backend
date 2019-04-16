import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMalariaTypes() {
    return this.http.get('/api/test/malaria-types')
  }

  getCountries(){
    return ["South Africa","Argentina","Brazil","North America"];
    //return this.http.get('http://localhost:2025/api/Employee/getAll?_guid=');
  }
}
