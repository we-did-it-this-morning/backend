import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.login().subscribe( token => this.loginService.storeToken(token["data"]["token"]));
  }

}
