import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';  
import {TokenManagerService} from "../token-manager.service";
import { FormManagerService } from '../form-manager.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  state$:Object;
  first:boolean=false;

  userRegistration: FormGroup;
  countryAddUpdate: FormGroup;
  RemoveCountries: FormGroup;
  updateAddTreatments: FormGroup;
  RemoveTreatments: FormGroup;
  updateAddSeverities: FormGroup;
  RemoveSeverities: FormGroup;
  updateAddPreventions: FormGroup;
  RemovePreventions: FormGroup;
  updateAddMalariaTypes: FormGroup;
  RemoveMalaria: FormGroup;
  updateAddSymptoms: FormGroup;
  RemoveSymptoms: FormGroup;

  listCountries:Object;
  listPreventions:Object;
  listMalaria:Object;
  listSymptoms:Object;
  listTreatments:Object;
  listSeverities:Object;
  listSymptomTypes:Object;
  listTreatmentTypes:Object;

  constructor(public router: Router,private formBuilder: FormBuilder,private token:TokenManagerService,private callVar:FormManagerService) { }
  Logout()
  {
    this.token.logout();
    this.router.navigate(['/']);
  }
  ngOnInit() 
  { 
    if(!this.token.checkTokenSet())
    {
      this.router.navigate(['login'])
    }
    else{
      this.populateList();
      this.userRegistration = this.formBuilder.group({
        username: ['', [Validators.required]],
         password: ['', [Validators.required]],
       });
       this.countryAddUpdate = this.formBuilder.group({
        id:[''],
        name: ['', [Validators.required]],
        typeM: ['', [Validators.required]],
       });
       this.RemoveCountries = this.formBuilder.group({
        id: ['', [Validators.required]]
       });
       this.updateAddTreatments = this.formBuilder.group({
        id:[''],
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        type:['',[Validators.required]]
       });
       this.RemoveTreatments= this.formBuilder.group({
        name: ['', [Validators.required]]
       }); 
       this.updateAddSeverities = this.formBuilder.group({
        id:[''],
        level: ['', [Validators.required]],
        description: ['', [Validators.required]],
        type:['',[Validators.required]]
       });
       this.RemoveSeverities= this.formBuilder.group({
        level: ['', [Validators.required]]
       }); 
       this.updateAddPreventions = this.formBuilder.group({
        id:[''],
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        severityNum:['',[Validators.required]]
       });
       this.RemovePreventions= this.formBuilder.group({
        name: ['', [Validators.required]]
       });
       this.updateAddMalariaTypes = this.formBuilder.group({
        id:[''],
        name:['',[Validators.required]],
        level: ['', [Validators.required]],
        description: ['', [Validators.required]],
        Treatments:['',[Validators.required]],
        Symptoms:['',[Validators.required]]
       });
       this.RemoveMalaria= this.formBuilder.group({
        name: ['', [Validators.required]]
       });
       this.RemoveSymptoms= this.formBuilder.group({
        name: ['', [Validators.required]]
       });
       this.updateAddSymptoms = this.formBuilder.group({
        id:[''],
        name:['',[Validators.required]],
        description: ['', [Validators.required]],
        sType:['',[Validators.required]]
       });
    }
  }
  onSubmit(buttonType)
  {
    this.first = true;
    if(buttonType==="userRegistration")
    {
      var obj = {"username":this.userRegistration.controls["username"].value,"password":this.userRegistration.controls["password"].value};
      var type= 'register';
      this.callVar.doApiCall(this.token.retrieve(),obj,type);
   
      // console.log(obj['password'].value);
    }
    else if(buttonType==="UpdateCountries")
    {
      var seperate = this.countryAddUpdate.controls["typeM"].value.split(',').map(Number);;
      var objTwo = {"id":this.countryAddUpdate.controls["id"].value,"name":this.countryAddUpdate.controls["name"].value,"malariaTypes":seperate};
      var type= 'update-country';
      this.callVar.doApiCall(this.token.retrieve(),objTwo,type);
    }
    else if(buttonType==="removeCountries")
    {
      var objThree = {"id":this.RemoveCountries.controls["id"].value};
      var type= 'delete-country';
      this.callVar.doApiCall(this.token.retrieve(),objThree,type);
    }
    else if(buttonType==="UpdateTreatments")
    {
      var objFour;
      if(this.updateAddTreatments.controls["id"].value)
      {
        objFour = {"id": this.updateAddTreatments.controls["id"].value,"name":this.updateAddTreatments.controls["name"].value,"description":this.updateAddTreatments.controls["description"].value,"treatmentType":this.updateAddTreatments.controls["type"].value};
      
      }else
      {
        objFour = {"name":this.updateAddTreatments.controls["name"].value,"description":this.updateAddTreatments.controls["description"].value,"treatmentType":this.updateAddTreatments.controls["type"].value};
      }
      
      var type= 'update-treatment';
      this.callVar.doApiCall(this.token.retrieve(),objFour,type);
    }
    else if(buttonType==="RemoveTreatments")
    {
      var objFive = {"id":this.RemoveTreatments.controls["name"].value};
      var type="delete-treatment";
      this.callVar.doApiCall(this.token.retrieve(),objFive,type);
    }
    else if(buttonType==="UpdateSeverities")  
    {
      var seperateTwo = this.updateAddSeverities.controls["type"].value.split(',').map(Number);;
      var objSix = {"level":this.updateAddSeverities.controls["level"].value,"description":this.updateAddSeverities.controls["description"].value,"preventions":seperateTwo};
      var type="update-severity";
      //this.callVar.doApiCall(this.token.retrieve(),objSix,type);
    }
    else if(buttonType==="RemoveSeverities")
    {
      var objSeven = {"level":this.RemoveSeverities.controls["level"].value};
      var type="delete-severity";
      this.callVar.doApiCall(this.token.retrieve(),objSeven,type);
    }
    else if(buttonType==="updatePreventions")
    {
      var seperateThree = this.updateAddPreventions.controls["severityNum"].value.split(',').map(Number);
      var objEight = {"id":this.updateAddPreventions.controls["id"].value,"name":this.updateAddPreventions.controls["name"].value,"description":this.updateAddPreventions.controls["description"].value,"severities":seperateThree};
      var type="update-prevention";
      this.callVar.doApiCall(this.token.retrieve(),objEight,type);
    }
    else if(buttonType==="RemovePrevention")
    {
      var objNine = {"id":this.RemovePreventions.controls["name"].value};
      var type="delete-prevention";
      this.callVar.doApiCall(this.token.retrieve(),objNine,type);
    }
    else if(buttonType==="updateAddMalariaTypes")
    {
      var objTen;

      var seperateFour = this.updateAddMalariaTypes.controls["Treatments"].value.split(',').map(Number);
      var seperateFive = this.updateAddMalariaTypes.controls["Symptoms"].value.split(',').map(Number);
      if(this.updateAddMalariaTypes.controls["id"].value)
      {
         objTen = {"id":this.updateAddMalariaTypes.controls["id"].value,"name":this.updateAddMalariaTypes.controls["name"].value,"description":this.updateAddMalariaTypes.controls["description"].value,"severity":this.updateAddMalariaTypes.controls["level"].value,"treatments":seperateFour,"symptoms":seperateFive};
      }
      else
      {
        objTen = {"name":this.updateAddMalariaTypes.controls["name"].value,"description":this.updateAddMalariaTypes.controls["description"].value,"severity":this.updateAddMalariaTypes.controls["level"].value,"treatments":seperateFour,"symptoms":seperateFive};
      }
      var type="update-malaria-type";
      this.callVar.doApiCall(this.token.retrieve(),objTen,type);
    }
    else if(buttonType==="RemoveMalaria")
    {
      var objEleven = {"id":this.RemoveMalaria.controls["name"].value};
      var type="delete-malaria-type";
      this.callVar.doApiCall(this.token.retrieve(),objEleven,type);
    }
    else if(buttonType==="removeSymptom")
    {
      var objTwelve = {"id":this.RemoveSymptoms.controls["name"].value};
      var type="delete-symptom";
      this.callVar.doApiCall(this.token.retrieve(),objTwelve,type);
    }
    else if(buttonType==="updateSymptom")
    {
      var objThirteen;
      if(this.updateAddSymptoms.controls["id"].value)
      {
       objThirteen={"id":this.updateAddSymptoms.controls["id"].value,"name":this.updateAddSymptoms.controls["name"].value,"description":this.updateAddSymptoms.controls["description"].value,"symptomType":this.updateAddSymptoms.controls["sType"].value};        
      }
      else{
        objThirteen={"name":this.updateAddSymptoms.controls["name"].value,"description":this.updateAddSymptoms.controls["description"].value,"symptomType":this.updateAddSymptoms.controls["sType"].value};        

      }
      var type="update-symptom";
      this.callVar.doApiCall(this.token.retrieve(),objThirteen,type);
    }
    // this.populateList();
  }
  populateList()
  {
    this.callVar.getCountries().subscribe((data:Response) =>
    {      
      this.listCountries = data['data'];       
    });
    this.callVar.getTreatments().subscribe((data:Response) =>
    {      
      this.listTreatments = data['data'];       
    });
    this.callVar.getPreventions().subscribe((data:Response) =>
    {      
      this.listPreventions = data['data'];       
    });
    this.callVar.getSeverities().subscribe((data:Response) =>
    {      
      this.listSeverities = data['data'];   
    });
    this.callVar.getSymptoms().subscribe((data:Response) =>
    {      
      this.listSymptoms = data['data'];   
    });
    this.callVar.getMalaria().subscribe((data:Response) =>
    {      
      this.listMalaria = data['data'];   
    });
    this.callVar.getSymptomTypes().subscribe((data:Response) =>
    {      
      this.listSymptomTypes = data['data'];   
    });
    this.callVar.getTreatmentTypes().subscribe((data:Response) =>
    {      
      this.listTreatmentTypes = data['data'];   
    });
  }
   
}


