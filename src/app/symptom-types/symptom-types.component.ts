import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptom-types',
  templateUrl: './symptom-types.component.html',
  styleUrls: ['./symptom-types.component.css']
})
export class SymptomTypesComponent implements OnInit {

  // symptomType objects stored in here (stub)
  symptomTypes: Object = [
    { id: 0, name: "Type 1"},
    { id: 1, name: "Type 2"},
    { id: 2, name: "Dangerous Type"}
  ];

  // Filter to be applied to the symptomTypes object (for searching)
  filterargs = '';

  constructor() { }

  ngOnInit() {
  }
}
