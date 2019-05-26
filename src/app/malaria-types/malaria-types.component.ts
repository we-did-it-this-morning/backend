import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import {FormHandlerService} from '../form-handler.service';
@Component({
  selector: 'app-malaria-types',
  templateUrl: './malaria-types.component.html',
  styleUrls: ['./malaria-types.component.css']
})
export class MalariaTypesComponent implements OnInit {

  // Malaria Type objects stored in here (stub)
  malariaTypes: Object 
  list:any=null
  updateMalariaType: FormGroup;
  addMalariaType:FormGroup;
  // Filter to be applied to the malariaTypes object (for searching)
  filterargs = '';

  constructor(private formBuilder: FormBuilder, private apiCaller:FormHandlerService) { }

  ngOnInit() {
    this.populateList();
    this.updateMalariaType = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      level: ['', [Validators.required]],
      description: ['', [Validators.required]],
      Treatments:['',[Validators.required]],
      Symptoms:['',[Validators.required]]
     });
     this.addMalariaType = this.formBuilder.group({
      name: ['', [Validators.required]],
      level: ['', [Validators.required]],
      description: ['', [Validators.required]],
      Treatments:['',[Validators.required]],
      Symptoms:['',[Validators.required]]
     });
  }

  // Used to retrieve the relevent foreign key data
  getTreatments(ids: Array<number>) {

    // treatments objects stored in here (stub)
    let treatments: Array<Object> = [
      { id: 0, name: "T1"},
      { id: 1, name: "T2"},
    ];
    
    return this.getNames(ids, treatments);
  }

  // Used to retrieve the relevent foreign key data
  getSymptoms(ids: Array<number>) {

    // symptoms objects stored in here (stub)
    let symptoms: Array<Object> = [
      { id: 0, name: "S1"},
      { id: 1, name: "S2"},
    ];
    
    return this.getNames(ids, symptoms);
  }

  getNames(ids: Array<number>, objects: Array<Object>){
    let types = '';
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
  populateList()
  {
    this.apiCaller.getList("malaria-types").subscribe((data:Response)=>
    {
      this.malariaTypes = data['data'];
      console.log(this.malariaTypes);
    });
  }
  typeList(index)
  {
    this.list=Object.keys(this.malariaTypes[index]).map(key => ({ key,value: this.malariaTypes[index][key]}));
    // console.log(this.list[0]);
    return;
  }
  updateMalaria(id,name,desc,severity,treatments,symtpoms)
  {
    var seperateFour = treatments.split(',').map(Number);
    var seperateFive = symtpoms.split(',').map(Number);
    let obj = {"id":id,"name":name,"description":desc,"severity":severity,"treatments":seperateFour,"symptoms":seperateFive};
    this.apiCaller.doApiCall(obj,"update-malaria-type");
  }
  
  deleteType(index)
  {
    let obj = this.malariaTypes[index]['id'];
    this.apiCaller.doApiCall(obj,"delete-malaria-type");
  }
  
  addType(name,description,severity,treatments,symptoms)
  {
    var seperateFour = treatments.split(',').map(Number);
    var seperateFive = symptoms.split(',').map(Number);
    let obj = {"name":name,"description":description,"severity":severity,"treatments":seperateFour,"symptoms":seperateFive};
    this.apiCaller.doApiCall(obj,"update-malaria-type");
  }
}

  // malariaTypes: Object = [
  //   { id: 0, name: "M1", description: "Some description", severity: 1, treatments: [0], symptoms: [0]},
  //   { id: 1, name: "M2", description: "Some description", severity: 2, treatments: [0,1], symptoms: [0,1]},
  //   { id: 2, name: "M3", description: "Some description", severity: 3, treatments: [], symptoms: [0,1,2]}
  // ];

  