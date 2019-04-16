import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';  
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userInfo = new FormGroup({username: new FormControl("",Validators.minLength(5)),password: new FormControl("",Validators.minLength(5))});
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private _router: Router) { }  
  ngOnInit() {
    this.userInfo = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit()
  {
    if(this.userInfo.valid){
      // this.http.post('/api/test/login-in', this.userInfo.value).subscribe((response)=>{
      //   console.log('repsonse ',response);
      //   if(response == true)
      //   {
      //     this._router.navigateByUrl(['admin'],{state:{allowedIN:"true"}});
      //   }
      // });
    }
  }

}
