import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  // Treatment objects stored in here (stub)
  treatments: Object = [
    { id: 0, name: "T1", description: "Some treatment", treatmentType: 0},
    { id: 1, name: "T2", description: "Some treatment", treatmentType: 1},
    { id: 2, name: "T3", description: "Some treatment", treatmentType: 2}
  ];

  // Filter to be applied to the treatments object (for searching)
  filterargs = '';

  constructor() { }

  ngOnInit() {
  }

  // Used to retrieve the relevent foreign key data
  getType(id: number) {

    // types objects stored in here (stub)
    let types: Array<Object> = [
      { id: 0, name: "Pills"},
      { id: 1, name: "More pills"},
      { id: 2, name: "Hospital"}
    ];
    
    return this.getDescription(id, types);
  }

  getDescription(id: number, objects: Array<Object>){
    return objects.filter(type => type['id'] == id)[0]['name'];
  }
}
