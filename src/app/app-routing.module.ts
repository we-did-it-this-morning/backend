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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'malaria-types', component: MalariaTypesComponent },
  { path: 'preventions', component: PreventionsComponent },
  { path: 'severities', component: SeveritiesComponent },
  { path: 'symptoms', component: SymptomsComponent },
  { path: 'treatments', component: TreatmentsComponent },
  { path: 'treatment-types', component: TreatmentTypesComponent },
  { path: 'symptom-types', component: SymptomTypesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
