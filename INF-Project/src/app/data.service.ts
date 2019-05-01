import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMalariaTypes() {
    return this.http.get('http://infmalariapp.herokuapp.com/malaria-types');
  }
}
