import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
title:string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  title:string = "";

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData

  ) { }

  ngOnInit(): void {
    switch (this.data.title) {
      case "v76":
        this.title = "Vision 76 műanyag ablak";
      break;
      case "rd70":
        this.title = "Rehau Design 70 műanyag ablak\n";
      break;
      case "e76":
        this.title = "Elegant 76 műanyag ablak\n";
        break;
      case "rs80":
        this.title = "Synego 80 műanyag ablak";
        break;
    }
    console.log("window component: " + this.data.title);
  }

}
