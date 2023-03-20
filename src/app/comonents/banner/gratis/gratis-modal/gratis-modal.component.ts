import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gratis-modal',
  templateUrl: './gratis-modal.component.html',
  styleUrls: ['./gratis-modal.component.scss']
})
export class GratisModalComponent implements OnInit {

  title:string = 'Műanyag ablakok 21 % kedvezménnyel';

  constructor() { }

  ngOnInit(): void {
  }

}
