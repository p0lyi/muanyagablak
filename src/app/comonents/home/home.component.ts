import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as AOS from "aos";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../tabs/plastic-windows/windows/modal/modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("defaultOpen")?.click();
  }

  openCity(evt: any, cityName: string): void {
    let i: number;
    let tabcontent: HTMLCollectionOf<Element> = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = "none";
    }
    let tablinks: HTMLCollectionOf<Element> = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      (tablinks[i] as HTMLElement).className = (tablinks[i] as HTMLElement).className.replace(" active", "");
    }
    (document.getElementById(cityName) as HTMLElement).style.display = "block";
    evt.currentTarget.className += " active";


  }

}
