import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';  
import { HttpClient, HttpResponse } from '@angular/common/http';  
import { Router } from '@angular/router';
import {TokenManagerService} from '../token-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userInfo:FormGroup;
  public login:boolean =true;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private _router: Router,private token:TokenManagerService) { } 

  ngOnInit() {
    this.userInfo = this.formBuilder.group({
     userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  Logout()
  {
    this.token.logout();
    this._router.navigate(['/']);
  }
  onSubmit(username,password)
  {
    if(this.userInfo.valid){
      var json = {"username":username,"password":password}
      this.http.post('http://infmalariapp.herokuapp.com/log-in', json).subscribe((response)=>{
        console.log('repsonse ',response);
        if(response['data']!=null)
        {
          this.token.store(response['data'].token);
        }
       
        if(this.token.checkTokenSet())
        {
          this._router.navigate(['admin']);
        }
      },(err)=>
      {
        this.login=false;
        console.log("User is unauthorized");

      });
    }
  }

}
