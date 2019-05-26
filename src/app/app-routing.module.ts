import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CountriesComponent } from 'src/app/countries/countries.component';
import { MalariaTypesComponent } from 'src/app/malaria-types/malaria-types.component';
import { PreventionsComponent } from 'src/app/preventions/preventions.component';
import { SeveritiesComponent } from 'src/app/severities/severities.component';
import { SymptomsComponent } from 'src/app/symptoms/symptoms.component';
import { TreatmentsComponent } from 'src/app/treatments/treatments.component';
import { TreatmentTypesComponent } from 'src/app/treatment-types/treatment-types.component';
import { SymptomTypesComponent } from 'src/app/symptom-types/symptom-types.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,canActivate:[LoginGuard] },
  { path: 'countries', component: CountriesComponent,canActivate:[LoginGuard]},
  { path: 'malaria-types', component: MalariaTypesComponent,canActivate:[LoginGuard] },
  { path: 'preventions', component: PreventionsComponent,canActivate:[LoginGuard]},
  { path: 'severities', component: SeveritiesComponent,canActivate:[LoginGuard] },
  { path: 'symptoms', component: SymptomsComponent,canActivate:[LoginGuard]},
  { path: 'treatments', component: TreatmentsComponent,canActivate:[LoginGuard] },
  { path: 'treatment-types', component: TreatmentTypesComponent,canActivate:[LoginGuard]},
  { path: 'symptom-types', component: SymptomTypesComponent,canActivate:[LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
