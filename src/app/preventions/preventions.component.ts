import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import {FormHandlerService} from '../form-handler.service';
@Component({
  selector: 'app-preventions',
  templateUrl: './preventions.component.html',
  styleUrls: ['./preventions.component.css']
})
export class PreventionsComponent implements OnInit {


  // Prevention objects stored in here (stub)
  preventions: Object = [];
  list:any=null
  updatePreventions: FormGroup;
  addPreventions:FormGroup;
  // Filter to be applied to the preventions object (for searching)
  filterargs = '';

  constructor(private formBuilder: FormBuilder, private apiCaller:FormHandlerService) { }

  ngOnInit() {
    this.populateList();
    this.updatePreventions = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
     });
     this.addPreventions = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
     });
  }
  typeList(index)
  {
    this.list=Object.keys(this.preventions[index]).map(key => ({ key,value: this.preventions[index][key]}));
    // console.log(this.list[0]);
    return;
  }
  populateList()
  {
    this.apiCaller.getList("preventions").subscribe((data:Response)=>
    {
      this.preventions = data['data'];
    });
  }
  updatePrevention(id,name,desc)
  {
    let obj = {"id":id,"name":name,"description":desc};
    this.apiCaller.doApiCall(obj,"update-prevention");
  }
  deleteType(index)
  {
    let obj = this.preventions[index]['id'];
    this.apiCaller.doApiCall(obj,"delete-prevention");
  }
  
  addType(name,description)
  {
    let obj = {"name":name,"description":description};
    this.apiCaller.doApiCall(obj,"update-prevention");
  }
}
