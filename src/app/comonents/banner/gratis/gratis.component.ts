import { Component, OnInit } from '@angular/core';
import {ModalComponent} from "../../tabs/plastic-windows/windows/modal/modal.component";
import {MatDialog} from "@angular/material/dialog";
import {GratisModalComponent} from "./gratis-modal/gratis-modal.component";

@Component({
  selector: 'app-gratis',
  templateUrl: './gratis.component.html',
  styleUrls: ['./gratis.component.scss']
})
export class GratisComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(GratisModalComponent);
  }

}
