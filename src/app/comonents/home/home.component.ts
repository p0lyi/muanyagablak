import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
