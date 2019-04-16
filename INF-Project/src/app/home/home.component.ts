import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {DataService} from '../data.service';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { forEach } from '@angular/router/src/utils/collection';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countrySelect : FormGroup;
  submitted = false;
  countryList;
  searchTerm = "";
  matchingCountries = [];
  @ViewChild('input') selectedInput; //References the input box

  constructor(private data : DataService, private formBuilder : FormBuilder) { }

  ngOnInit() {

    this.countrySelect = this.formBuilder.group({
      country: ['', Validators.required]
    });

    this.countryList = this.data.getCountries();
    console.log(this.countryList);
  }

  selectedCountry(country){
    
    this.selectedInput.nativeElement.value = country; // Sets the input to the selected country from the list
    this.matchingCountries = [];
  }

  search(event){  // Dynamically search through countries and match the input
    
    this.searchTerm = event.target.value;
    
    if(this.searchTerm == ""){
      this.matchingCountries = [];
      return;
    }
     
    this.matchingCountries = [];

    this.countryList.forEach(country => {
      
      if( country.indexOf(this.searchTerm) != -1){
        this.matchingCountries.push(country);
      }
    });    
  
  }
 

  onSubmit(){

  }

}
