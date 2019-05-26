import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preventions',
  templateUrl: './preventions.component.html',
  styleUrls: ['./preventions.component.css']
})
export class PreventionsComponent implements OnInit {

  // Prevention objects stored in here (stub)
  preventions: Object = [
    { id: 0, name: "P1", description: "First prevention"},
    { id: 1, name: "P2", description: "Some prevention"},
    { id: 2, name: "P3", description: "Last prevention"}
  ];

  // Filter to be applied to the preventions object (for searching)
  filterargs = '';

  constructor() { }

  ngOnInit() {
  }
}
