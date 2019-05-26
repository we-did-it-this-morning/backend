import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import {FormHandlerService} from '../form-handler.service';
@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  // Symptom objects stored in here (stub)
  symptoms: Object = [
    { id: 0, name: "S1", description: "Some symptom", symptomType: 0},
    { id: 1, name: "S2", description: "Some symptom", symptomType: 1},
    { id: 2, name: "S3", description: "Some symptom", symptomType: 2}
  ];
  list:any=null
  updateSym: FormGroup;
  addSym:FormGroup;
  // Filter to be applied to the symptoms object (for searching)
  filterargs = '';

  constructor(private formBuilder: FormBuilder, private apiCaller:FormHandlerService) { }

  ngOnInit() {
    this.populateList();
    this.updateSym = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      symptomType: ['', [Validators.required]],
     });
     this.addSym = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      symptomType: ['', [Validators.required]],
     });
  }
  populateList()
  {
    this.apiCaller.getList("symptoms").subscribe((data:Response)=>
    {
      this.symptoms = data['data'];
    });
  }
  // Used to retrieve the relevent foreign key data
  getType(id: number) {

    // types objects stored in here (stub)
    let types: Array<Object> = [
      { id: 0, name: "Type 1"},
      { id: 1, name: "Type 2"},
      { id: 2, name: "Dangerous Type"}
    ];
    
    return this.getDescription(id, types);
  }

  getDescription(id: number, objects: Array<Object>){
    if(!id) return "-";
    return objects.filter(type => type['id'] == id)[0]['name'];
  }
  
  typeList(index)
  {
    this.list=Object.keys(this.symptoms[index]).map(key => ({ key,value: this.symptoms[index][key]}));
    // console.log(this.list[0]);
    return;
  }
  updateSymS(id,name,description,symptomType)
  {
    let obj = {"id":id,"name":name,"description":description,"symptomType":symptomType};
    this.apiCaller.doApiCall(obj,"update-symptom");
  }
  
  deleteType(index)
  {
    let obj = this.symptoms[index]['id'];
    this.apiCaller.doApiCall(obj,"delete-symptom");
  }
  
  addType(name,description,symptomType)
  {
 
    let obj = {"name":name,"description":description,"symptomType":symptomType};
    this.apiCaller.doApiCall(obj,"update-symptom");
  }
}
