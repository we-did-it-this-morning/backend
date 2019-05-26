import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  // Country objects stored in here (stub)
  countries: Object = [
    { id: 0, name: "South Africa", malariaTypes: [0,1,2]},
    { id: 1, name: "Canada", malariaTypes: []},
  ];

  // Filter to be applied to the countries object (for searching)
  filterargs = '';

  constructor() { }

  ngOnInit() {
  }

  // Used to retrieve the relevent foreign key data
  getMalariaType(ids: Array<number>) {

    // malariaTypes objects stored in here (stub)
    let malariaTypes: Array<Object> = [
      { id: 0, name: "M1", description: "", severity: 0, treatments: [], symptoms: [] },
      { id: 1, name: "M2", description: "", severity: 0, treatments: [], symptoms: [] },
      { id: 2, name: "M3", description: "", severity: 0, treatments: [], symptoms: [] },
    ];

    return this.getNames(ids, malariaTypes);
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
