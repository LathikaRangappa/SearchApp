import { Component, OnInit, Inject } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { MAT_DIALOG_DATA,MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from "@ngrx/store";
import * as Cart from '../user.actions';

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
  listValues: any = [];
  obj: any;
  lists: any = [];
  showInput: boolean = false;
  listname:any;
  favLists: unknown[];
  constructor(private serv:ImageService,private dialog: MatDialog,public snackBar: MatSnackBar,public store:Store<{cart:any}>, private dialogRef: MatDialogRef<FavListsCompComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
   }
  ngOnInit(): void {
    this.lists = this.serv.dataGetter();
    if(this.lists.length != 0){
    this.favList = true;
    this.favLists = [...new Set(this.lists.map(x=>x.name))]
    }
    console.log(this.lists);
  }
  
  //snackBar
  openSnackBar(message: any, action: string) {
    this.snackBar.open(message, action, {
        duration: 3000,
    });
  }
  addToFavourities(listName){
    this.store.pipe(select('cart')).subscribe(data=>console.log(data));
    this.store.dispatch(new Cart.AddProduct(this.data))
    // if(listName === undefined){
    //     alert("Input field cannot be empty")
    // }else{
    //   this.obj = {"name":listName,"imageUrl":this.data.urls.small}
    //   this.serv.dataSetter(this.obj);
    //   this.openSnackBar(this.data.alt_description, "Added to Favourities");
    // }
  }
  addToExisting(listName){
    console.log(listName)
    this.obj = {"name":listName,"imageUrl":this.data.urls.small}
    this.serv.dataSetter(this.obj);
  }
  addNewList(){
    this.showInput = true
  }
}
