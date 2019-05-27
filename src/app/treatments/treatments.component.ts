import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import {FormHandlerService} from '../form-handler.service';
@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  // Treatment objects stored in here (stub)
  treatments: Object = [
    { id: 0, name: "T1", description: "Some treatment", treatmentType: 0},
    { id: 1, name: "T2", description: "Some treatment", treatmentType: 1},
    { id: 2, name: "T3", description: "Some treatment", treatmentType: 2}
  ];

  // Filter to be applied to the treatments object (for searching)
  list:any=null
  updateTreatment: FormGroup;
  addTreatment:FormGroup;
  // Filter to be applied to the symptoms object (for searching)
  filterargs = '';

  constructor(private formBuilder: FormBuilder, private apiCaller:FormHandlerService) { }

  ngOnInit() {
    this.populateList();
    this.updateTreatment = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      treatmentType: ['', [Validators.required]],
     });
     this.addTreatment = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      treatmentType: ['', [Validators.required]],
     });
  }
  populateList()
  {
    this.apiCaller.getList("treatments").subscribe((data:Response)=>
    {
      this.treatments = data['data'];
    });
  }
  // Used to retrieve the relevent foreign key data
  getType(id: number) {

    // types objects stored in here (stub)
    let types: Array<Object> = [
      { id: 0, name: "Pills"},
      { id: 1, name: "More pills"},
      { id: 2, name: "Hospital"}
    ];
    
    return this.getDescription(id, types);
  }

  getDescription(id: number, objects: Array<Object>){
    if(!id) return "-";
    return objects.filter(type => type['id'] == id)[0]['name'];
  }
  typeList(index)
  {
    this.list=Object.keys(this.treatments[index]).map(key => ({ key,value: this.treatments[index][key]}));
    // console.log(this.list[0]);
    return;
  }
  updateTreatments(id,name,description,symptomType)
  {
    let obj = {"id":id,"name":name,"description":description,"treatmentType":symptomType};
    this.apiCaller.doApiCall(obj,"update-treatment");
  }
  
  deleteType(index)
  {
    let obj = {
      id: this.treatments[index]['id']
    };
    this.apiCaller.doApiCall(obj,"delete-treatment");
  }
  
  addType(name,description,symptomType)
  {
 
    let obj = {"name":name,"description":description,"treatmentType":symptomType};
    this.apiCaller.doApiCall(obj,"update-treatment");
  }
}
