import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from "@angular/material/dialog";
import { ImageService } from '../shared/image.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavListsCompComponent } from '../fav-lists-comp/fav-lists-comp.component';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {
  data:any;
  pageUrl:String;
  favImages : any;
  imageName: any;
  constructor(private serv:ImageService,private dialog: MatDialog,public snackBar: MatSnackBar,private dialogRef: MatDialogRef<DialogPopupComponent>,@Inject(MAT_DIALOG_DATA) data) { 
    this.data = data;
    this.pageUrl = data.user.name
    this.imageName = data.alt_description;
    console.log(data);
  }

  ngOnInit(): void {
  }
  addToFavourities(){
    this.serv.dataSetter(this.data);
    this.openSnackBar(this.data.alt_description, "Added to Favourities");
  }
  //snackBar
  openSnackBar(message: any, action: string) {
    this.snackBar.open(message, action, {
        duration: 3000,
    });
  }
  openDialog():void {
    const dialogRef=this.dialog.open(FavListsCompComponent , {   
        width:'300px',
        height:'200px',
        data:this.data
    });
    dialogRef.afterClosed().subscribe(result=> {
      console.log(result)
    });
  }
}
