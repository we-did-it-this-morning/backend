import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import {FormHandlerService} from '../form-handler.service';
@Component({
  selector: 'app-treatment-types',
  templateUrl: './treatment-types.component.html',
  styleUrls: ['./treatment-types.component.css']
})
export class TreatmentTypesComponent implements OnInit {

  // treatmentType objects stored in here (stub)
  treatmentTypes: Object = [
    { id: 0, name: "Pills"},
    { id: 1, name: "More pills"},
    { id: 2, name: "Hospital"}
  ];
  list:any=null
  updateType: FormGroup;
  addTType:FormGroup;
  // Filter to be applied to the symptoms object (for searching)
  filterargs = '';

  constructor(private formBuilder: FormBuilder, private apiCaller:FormHandlerService) { }


  ngOnInit() {
    this.populateList();
    this.updateType = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
     });
     this.addTType = this.formBuilder.group({
      name: ['', [Validators.required]],
     });
  }
  populateList()
  {
    this.apiCaller.getList("treatment-types").subscribe((data:Response)=>
    {
      this.treatmentTypes = data['data'];
    });
  }
 
  
  typeList(index)
  {
    this.list=Object.keys(this.treatmentTypes[index]).map(key => ({ key,value: this.treatmentTypes[index][key]}));
    // console.log(this.list[0]);
    return;
  }
  updateTTypes(id,name)
  {
    let obj = {"id":id,"name":name};
    this.apiCaller.doApiCall(obj,"update-treatment-type");
  }
  
  deleteType(index)
  {
    let obj = this.treatmentTypes[index]['id'];
    this.apiCaller.doApiCall(obj,"delete-treatment-type");
  }
  
  addType(name)
  {
 
    let obj = {"name":name};
    this.apiCaller.doApiCall(obj,"update-treatment-type");
  }
}
