import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modal/modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent implements OnInit {

  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(title: string) {
    console.log("window component: " + title);
    const dialogRef = this.dialog.open(ModalComponent,{data:{title:title}});
  }
}
