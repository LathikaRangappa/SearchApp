import { Component, OnInit, Inject } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { MAT_DIALOG_DATA,MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fav-lists-comp',
  templateUrl: './fav-lists-comp.component.html',
  styleUrls: ['./fav-lists-comp.component.css']
})
export class FavListsCompComponent implements OnInit {
  listName:any;
  listArray : any = [];
  favList: boolean;
  data: any;
  selectedImage: any;
  list1: any = [];
  list2: any = [];
  favor1: any;
  favor2: any;
  val1: string;
  listValues: any = [];
  obj: any;
  
  constructor(private serv:ImageService,private dialog: MatDialog,public snackBar: MatSnackBar,private dialogRef: MatDialogRef<FavListsCompComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
   }
  ngOnInit(): void {
    let lists = this.getLists();
    if(lists != null){
      this.favList = true;
    }
    console.log(lists);
  }
  addToFavourities(listName){
    this.obj = {}
    this.obj[listName]=this.data;
    this.serv.dataSetter(this.obj);
  }
  getLists(){
    var lists = this.serv.dataGetter();
    return lists;
  }
}
