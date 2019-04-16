import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-malaria-page',
  templateUrl: './malaria-page.component.html',
  styleUrls: ['./malaria-page.component.scss']
})
export class MalariaPageComponent implements OnInit {

  constructor(private data:DataService) { }

  //!Variables
  malaria : Object;
  h1Style :boolean = true;

  ngOnInit() {
    this.data.getMalariaTypes().subscribe(data => {
        this.malaria = data
      }
    );
  }
}
