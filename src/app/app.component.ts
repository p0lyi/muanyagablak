import {Component, OnInit} from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'muanyagablak';

  constructor() {
    //beuszas
    AOS.init();
    window.addEventListener('load',AOS.refresh);
  }
}
