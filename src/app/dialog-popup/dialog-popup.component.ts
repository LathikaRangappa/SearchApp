import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { ImageService } from '../shared/image.service'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {
  data:any;
  pageUrl:String;
  favImages : any;
  constructor(private serv:ImageService,public snackBar: MatSnackBar,private dialogRef: MatDialogRef<DialogPopupComponent>,@Inject(MAT_DIALOG_DATA) data) { 
    this.data = data;
    this.pageUrl = data.user.username
    console.log(data);
  }

  ngOnInit(): void {
  }
  addToFavourities(){
    this.serv.dataSetter(this.data)
    this.openSnackBar(this.data.alt_description, "Added to Favourities");
  }
  //snackBar
  openSnackBar(message: any, action: string) {
    this.snackBar.open(message, action, {
        duration: 3000,
    });
}
}
