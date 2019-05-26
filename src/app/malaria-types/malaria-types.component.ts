import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-malaria-types',
  templateUrl: './malaria-types.component.html',
  styleUrls: ['./malaria-types.component.css']
})
export class MalariaTypesComponent implements OnInit {

  // Malaria Type objects stored in here (stub)
  malariaTypes: Object = [
    { id: 0, name: "M1", description: "Some description", severity: 1, treatments: [0], symptoms: [0]},
    { id: 1, name: "M2", description: "Some description", severity: 2, treatments: [0,1], symptoms: [0,1]},
    { id: 2, name: "M3", description: "Some description", severity: 3, treatments: [], symptoms: [0,1,2]}
  ];

  // Filter to be applied to the malariaTypes object (for searching)
  filterargs = '';

  constructor() { }

  ngOnInit() {
  }

  // Used to retrieve the relevent foreign key data
  getTreatments(ids: Array<number>) {

    // treatments objects stored in here (stub)
    let treatments: Array<Object> = [
      { id: 0, name: "T1"},
      { id: 1, name: "T2"},
      { id: 2, name: "T3"},
    ];
    
    return this.getNames(ids, treatments);
  }

  // Used to retrieve the relevent foreign key data
  getSymptoms(ids: Array<number>) {

    // symptoms objects stored in here (stub)
    let symptoms: Array<Object> = [
      { id: 0, name: "S1"},
      { id: 1, name: "S2"},
      { id: 2, name: "S3"},
    ];
    
    return this.getNames(ids, symptoms);
  }

  getNames(ids: Array<number>, objects: Array<Object>){
    let types = '';
    if (ids.length > 0) {
      ids.forEach(id => {
        let type = objects.filter(type => type['id'] == id)[0];
        types += ', ' + type['name']
      });
      // Removes first ', '
      types = types.slice(2);
    }
    else {
      types = '-';
    }

    return types;
  }
}
