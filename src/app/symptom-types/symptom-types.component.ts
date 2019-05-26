import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import {FormHandlerService} from '../form-handler.service';
@Component({
  selector: 'app-symptom-types',
  templateUrl: './symptom-types.component.html',
  styleUrls: ['./symptom-types.component.css']
})
export class SymptomTypesComponent implements OnInit {

  // symptomType objects stored in here (stub)
  symptomTypes: Object = [
    { id: 0, name: "Type 1"},
    { id: 1, name: "Type 2"},
    { id: 2, name: "Dangerous Type"}
  ];
  list:any=null
  updateSymTypes: FormGroup;
  addSymTypes:FormGroup;

  // Filter to be applied to the symptomTypes object (for searching)
  filterargs = '';

  constructor(private formBuilder: FormBuilder, private apiCaller:FormHandlerService) { }

  ngOnInit() {
    this.updateSymTypes = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
     
     });
     this.addSymTypes = this.formBuilder.group({
      name: ['', [Validators.required]],
     });
  }

  typeList(index)
  {
    this.list=Object.keys(this.symptomTypes[index]).map(key => ({ key,value: this.symptomTypes[index][key]}));
    // console.log(this.list[0]);
    return;
  }
  updateSymType(id,name)
  {
    let obj = {"id":id,"name":name};
    this.apiCaller.doApiCall(obj,"update-symptom-type");
  }
  
  deleteType(index)
  {
    let obj = this.symptomTypes[index]['id'];
    this.apiCaller.doApiCall(obj,"delete-symptom-type");
  }
  
  addType(name)
  {
 
    let obj = {"name":name};
    this.apiCaller.doApiCall(obj,"update-symptom-type");
  }
}
