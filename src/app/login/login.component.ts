import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn = false;
  loginForm : FormGroup;
  submitted = false;
  unauthorised = false;

  constructor(private loginService : LoginService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
     });
  }

  login(){

    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    this.loginService.login(this.loginForm.controls.username.value,this.loginForm.controls.password.value).subscribe( token => {
      console.log(token);
      
      if(token == null){
        this.unauthorised = true;
        return;
      }
      this.loginService.storeToken(token["data"]["token"]);
      this.loggedIn = true;
    });
    
    
  }

}
