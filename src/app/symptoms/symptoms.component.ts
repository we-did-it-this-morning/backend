import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  // Symptom objects stored in here (stub)
  symptoms: Object = [
    { id: 0, name: "S1", description: "Some symptom", symptomType: 0},
    { id: 1, name: "S2", description: "Some symptom", symptomType: 1},
    { id: 2, name: "S3", description: "Some symptom", symptomType: 2}
  ];

  // Filter to be applied to the symptoms object (for searching)
  filterargs = '';

  constructor() { }

  ngOnInit() {
  }

  // Used to retrieve the relevent foreign key data
  getType(id: number) {

    // types objects stored in here (stub)
    let types: Array<Object> = [
      { id: 0, name: "Type 1"},
      { id: 1, name: "Type 2"},
      { id: 2, name: "Dangerous Type"}
    ];
    
    return this.getDescription(id, types);
  }

  getDescription(id: number, objects: Array<Object>){
    return objects.filter(type => type['id'] == id)[0]['name'];
  }
}
