import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {

  constructor(private loginService : LoginService){}

  canActivate(next: ActivatedRouteSnapshot,state:RouterStateSnapshot) : boolean{
    return this.loginService.isLoggedIn;
  }
}
