import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-severities',
  templateUrl: './severities.component.html',
  styleUrls: ['./severities.component.css']
})
export class SeveritiesComponent implements OnInit {

  // Severitiy objects stored in here (stub)
  severities: Object = [
    { id: 0, level: "1", description: "Some severity level", preventions: [0]},
    { id: 1, level: "2", description: "Some severity level", preventions: [1]},
    { id: 2, level: "3", description: "Some severity level", preventions: [0,1,2]}
  ];

  // Filter to be applied to the severities object (for searching)
  filterargs = '';

  constructor() { }

  ngOnInit() {
  }

  // Used to retrieve the relevent foreign key data
  getPreventions(ids: Array<number>) {

    // preventions objects stored in here (stub)
    let preventions: Array<Object> = [
      { id: 0, name: "P1", description: "First prevention"},
      { id: 1, name: "P2", description: "Some prevention"},
      { id: 2, name: "P3", description: "Last prevention"}
    ];
    
    return this.getNames(ids, preventions);
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
