import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {
  panelOpenState: boolean  = false;

  constructor() { }

  ngOnInit(): void {
  }

}
