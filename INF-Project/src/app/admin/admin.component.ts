import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  state$:Object;
  constructor(public router: Router,private formBuilder: FormBuilder, private http: HttpClient) { }

  userRegistration = new FormGroup({username: new FormControl("",Validators.minLength(5)),password: new FormControl("",Validators.minLength(5))});
  countryUpdate = new FormGroup({username: new FormControl("",Validators.minLength(5)),password: new FormControl("",Validators.minLength(5))});
  RemoveCountries = new FormGroup({username: new FormControl("",Validators.minLength(5)),password: new FormControl("",Validators.minLength(5))});
  UpdateTreatments = new FormGroup({username: new FormControl("",Validators.minLength(5)),password: new FormControl("",Validators.minLength(5))});
  UpdateSeverity = new FormGroup({username: new FormControl("",Validators.minLength(5)),password: new FormControl("",Validators.minLength(5))});
  RemoveSeverities = new FormGroup({username: new FormControl("",Validators.minLength(5)),password: new FormControl("",Validators.minLength(5))});
  updatePrevention = new FormGroup({username: new FormControl("",Validators.minLength(5)),password: new FormControl("",Validators.minLength(5))});

  ngOnInit() {
    //! getting a state which if send from login should displpay true.
    //! Without this state$ set the page will not dispay.Do not know how to redirect tho.
    // this.state$ =  this.router.events.pipe(
    //   filter(e => e instanceof NavigationStart),
    //   map(() => this.router.getCurrentNavigation().extras.state)
    // )
    // //! IF for some reason you navigate to this page without loggin in
    // //! it will redirect to login
    // if(this.state$ != 'true')
    // {
    //   this.router.navigate(['login']);
    // }
    this.userRegistration = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.countryUpdate = this.formBuilder.group({
      name: ['', [Validators.required]],
      types: ['', [Validators.required]],
    });
    this.RemoveCountries = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
    this.UpdateTreatments = this.formBuilder.group({
      name: ['', [Validators.required]],
      descritpion: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
    this.UpdateSeverity = this.formBuilder.group({
      level: ['', [Validators.required]],
      descritpion: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
    this.RemoveSeverities = this.formBuilder.group({
      level: ['', [Validators.required]]
    });
    this.updatePrevention = this.formBuilder.group({
      name: ['', [Validators.required]],
      descritpion: ['', [Validators.required]],
    });
  }
  onSumbit()
  {
    if(this.userRegistration.valid){
      //userRegistration part
    }
    if(this.countryUpdate.valid){
      //updating a country part
    }
    if(this.RemoveCountries.valid){
      //removing of a country part
    }
    if(this.UpdateTreatments.valid){
      //updating a treatment part
    }
    if(this.UpdateSeverity.valid){
      //updating severity  part
    }
    if(this.RemoveSeverities.valid)
    {
      //remove a severity level
    }
    if(this.updatePrevention.valid)
    {

    }
  }
}


