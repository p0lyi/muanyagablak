import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  title:string;
}

@Component({
  selector: 'app-blind-modal',
  templateUrl: './blind-modal.component.html',
  styleUrls: ['./blind-modal.component.scss']
})
export class BlindModalComponent implements OnInit {

  title:string = "";

  constructor(
    public dialogRef: MatDialogRef<BlindModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {

  }

  ngOnInit(): void {
    switch (this.data.title) {
      case "heroal":
        this.title = "Heroal alumínium redőny";
        break;
      case "alu":
        this.title = "Atenád kompakt alumínium redőny";
        break;
      case "easy":
        this.title = "Új típusú műanyag redőny - EasyPlast";
        break;
      case "exte":
        this.title = "Exte Elite XT redőny";
        break;
    }
    console.log("window component: " + this.data.title);
  }

}
