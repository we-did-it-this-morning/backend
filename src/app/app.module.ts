import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { CountriesComponent } from './countries/countries.component';
import { SeveritiesComponent } from './severities/severities.component';
import { PreventionsComponent } from './preventions/preventions.component';
import { MalariaTypesComponent } from './malaria-types/malaria-types.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import { TreatmentTypesComponent } from './treatment-types/treatment-types.component';
import { SymptomTypesComponent } from './symptom-types/symptom-types.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    CountriesComponent,
    SeveritiesComponent,
    PreventionsComponent,
    MalariaTypesComponent,
    TreatmentsComponent,
    SymptomsComponent,
    HomeComponent,
    FilterPipe,
    TreatmentTypesComponent,
    SymptomTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
