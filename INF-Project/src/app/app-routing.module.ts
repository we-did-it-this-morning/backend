import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MalariaPageComponent } from './malaria-page/malaria-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:"admin",component:AdminComponent},
  {path:"login",component:LoginComponent},
  {path:"malaria",component:MalariaPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
