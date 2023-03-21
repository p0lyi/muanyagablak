import { Component, OnInit } from '@angular/core';
import {ModalComponent} from "../../plastic-windows/windows/modal/modal.component";
import {MatDialog} from "@angular/material/dialog";
import {BlindModalComponent} from "./blind-modal/blind-modal.component";

@Component({
  selector: 'app-blind-main',
  templateUrl: './blind-main.component.html',
  styleUrls: ['./blind-main.component.scss']
})
export class BlindMainComponent implements OnInit {
   images =  ['assets/images/94a5e.jpg','assets/images/easy-plast-4-large.jpg','assets/images/atenad-kompakt-large.jpg','assets/images/heroal-large.jpg'] ;

  slides = [
    {'image': 'assets/images/94a5e.jpg'},
    {'image': 'assets/images/easy-plast-4-large.jpg'},
    {'image': 'assets/images/atenad-kompakt-large.jpg'},
    {'image': 'assets/images/heroal-large.jpg'}
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(type: string) {
    this.dialog.open(BlindModalComponent, {data: {title: type}});
  }
}
