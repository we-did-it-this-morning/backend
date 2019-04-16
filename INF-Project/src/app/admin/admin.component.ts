import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  state$:Object;
  
  constructor(public router: Router) { }

  ngOnInit() {
    //! getting a state which if send from login should displpay true.
    //! Without this state$ set the page will not dispay.Do not know how to redirect tho.
    this.state$ =  this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => this.router.getCurrentNavigation().extras.state)
    )
    //! IF for some reason you navigate to this page without loggin in
    //! it will redirect to login
    if(this.state$ != true)
    {
      this.router.navigate(['login']);
    }
  }
  }


