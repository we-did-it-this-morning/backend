import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import {FormHandlerService} from '../form-handler.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  // Country objects stored in here (stub)
  countries: Object = [
    { id: 0, name: "South Africa", malariaTypes: [0,1,2]},
    { id: 1, name: "Canada", malariaTypes: []},
  ];
  list:any=null
  updateCountry: FormGroup;
  addCountry:FormGroup;
  // Filter to be applied to the symptoms object (for searching)
  filterargs = '';

  constructor(private formBuilder: FormBuilder, private apiCaller:FormHandlerService) { }

  ngOnInit() {
    this.populateList();
    this.updateCountry = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      malariaTypes: ['', [Validators.required]],
     });
     this.addCountry = this.formBuilder.group({
      name: ['', [Validators.required]],
      malariaTypes: ['', [Validators.required]],
     });
  }
  populateList()
  {
    this.apiCaller.getList("countries").subscribe((data:Response)=>
    {
      this.countries = data['data'];
    });
  }

  // Used to retrieve the relevent foreign key data
  getMalariaType(ids: Array<number>) {

    // malariaTypes objects stored in here (stub)
    let malariaTypes: Array<Object> = [
      { id: 0, name: "M1", description: "", severity: 0, treatments: [], symptoms: [] },
      { id: 1, name: "M2", description: "", severity: 0, treatments: [], symptoms: [] },
      { id: 2, name: "M3", description: "", severity: 0, treatments: [], symptoms: [] },
    ];

    return this.getNames(ids, malariaTypes);
  }

  getNames(ids: Array<number>, objects: Array<Object>){
    let types = '';
    if(!ids)return "-";
    if (ids.length > 0) {
      ids.forEach(id => {
        let type = objects.filter(type => type['id'] == id)[0];
        types += ', ' + type['name']
      });
      // Removes first ', '
      types = types.slice(2);
    }
    else {
      types = '-';
    }

    return types;
  }
  typeList(index)
  {
    this.list=Object.keys(this.countries[index]).map(key => ({ key,value: this.countries[index][key]}));
    // console.log(this.list[0]);
    return;
  }
  updateCountries(id,name,symptomType)
  {
    var seperateFour = symptomType.split(',').map(Number);
    let obj = {"id":id,"name":name,"malariaTypes":seperateFour};
    this.apiCaller.doApiCall(obj,"update-country");
  }
  
  deleteType(index)
  {
    let obj = this.countries[index]['id'];
    this.apiCaller.doApiCall(obj,"delete-country");
  }
  
  addType(name,symptomType)
  {
    var seperateFour = symptomType.split(',').map(Number);

    let obj = {"name":name,"malariaTypes":seperateFour};
    this.apiCaller.doApiCall(obj,"update-countr");
  }

}
