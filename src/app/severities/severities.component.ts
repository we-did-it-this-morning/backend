import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import {FormHandlerService} from '../form-handler.service';
@Component({
  selector: 'app-severities',
  templateUrl: './severities.component.html',
  styleUrls: ['./severities.component.css']
})
export class SeveritiesComponent implements OnInit {

  // Severitiy objects stored in here (stub)
  severities: Object = [
    // { id: 0, level: "1", description: "Some severity level", preventions: [0]},
    // { id: 1, level: "2", description: "Some severity level", preventions: [1]},
    // { id: 2, level: "3", description: "Some severity level", preventions: [0,1,2]}
  ];

  // Filter to be applied to the severities object (for searching)
  filterargs = '';
  list:any=null
  updateSeverity: FormGroup;
  addSeverity:FormGroup;

  constructor(private formBuilder: FormBuilder, private apiCaller:FormHandlerService) { }

  ngOnInit() {
    this.populateList();
    this.updateSeverity = this.formBuilder.group({
      level: ['', [Validators.required]],
      description: ['', [Validators.required]],
      preventions:['',[Validators.required]],
     });
     this.addSeverity = this.formBuilder.group({
      level: ['', [Validators.required]],
      description: ['', [Validators.required]],
      preventions:['',[Validators.required]],
     });
  }

  // Used to retrieve the relevent foreign key data
  getPreventions(ids: Array<number>) {

    // preventions objects stored in here (stub)
    let preventions: Array<Object> = [
      { id: 0, name: "P1", description: "First prevention"},
      { id: 1, name: "P2", description: "second prevention"},
      { id: 2, name: "P3", description: "third prevention"},
      { id: 3, name: "P4", description: "fourth prevention"},
    ];
    
    return this.getNames(ids, preventions);
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
  typeList(index)
  {
    this.list=Object.keys(this.severities[index]).map(key => ({ key,value: this.severities[index][key]}));
    //console.log(this.list);
    return;
  }
  populateList()
  {
    this.apiCaller.getList("severities").subscribe((data:Response)=>
    {
      this.severities = data['data'];
    });
  }
  updatePrevention(id,name,desc)
  {
    var seperateFour = desc.split(',').map(Number);
    let obj = {"level":id,"description":name,"preventions":seperateFour};
    this.apiCaller.doApiCall(obj,"update-severity");
  }
  deleteType(index)
  {
    let obj = this.severities[index]['level'];
    this.apiCaller.doApiCall(obj,"delete-severity");
  }
  
  addType(name,description)
  {
    var seperateFour = description.split(',').map(Number);
    let obj = {"description":name,"preventions":seperateFour};
    this.apiCaller.doApiCall(obj,"update-severity");
  }
}
