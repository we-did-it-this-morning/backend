import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatment-types',
  templateUrl: './treatment-types.component.html',
  styleUrls: ['./treatment-types.component.css']
})
export class TreatmentTypesComponent implements OnInit {

  // treatmentType objects stored in here (stub)
  treatmentTypes: Object = [
    { id: 0, name: "Pills"},
    { id: 1, name: "More pills"},
    { id: 2, name: "Hospital"}
  ];

  // Filter to be applied to the treatmentType object (for searching)
  filterargs = '';

  constructor() { }

  ngOnInit() {
  }
}
