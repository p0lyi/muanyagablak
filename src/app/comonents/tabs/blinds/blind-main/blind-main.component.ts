import {Component, OnInit} from '@angular/core';
import {ModalComponent} from "../../plastic-windows/windows/modal/modal.component";
import {MatDialog} from "@angular/material/dialog";
import {BlindModalComponent} from "./blind-modal/blind-modal.component";

@Component({
  selector: 'app-blind-main',
  templateUrl: './blind-main.component.html',
  styleUrls: ['./blind-main.component.scss']
})
export class BlindMainComponent implements OnInit {
  images = [
    'assets/images/94a5e.jpg',
    'assets/images/easy-plast-4-large.jpg',
    'assets/images/atenad-kompakt-large.jpg',
    'assets/images/heroal-large.jpg'];

  images2 = [
    'assets/images/e9ed8.jpg',
    'assets/images/exte-elite-xt-large.jpg',
    'assets/images/st-200-rg-redony-725-large.jpg',
    'assets/images/ae-200-rg-redony-725-large.jpg'];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(type: string) {
    this.dialog.open(BlindModalComponent, {data: {title: type}});
  }
}
