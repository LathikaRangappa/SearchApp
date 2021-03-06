import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';
import {Store ,select } from '@ngrx/store';
import * as UserActions from '../user.actions';
import * as fromUser from '../user.selectors';
import { items } from '../items';
import * as Cart from '../user.actions';
import { Observable } from "rxjs";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  searchQuery: string;
  Favorities: boolean = false;
  FavData: any;
  favoriteImages: any = [];
  items:items[]=[];

  cart: Observable<Array<any>>
  handleSuccess(data) {
    this.searching = false;
    this.imagesFound = true;
    this.images = data.results;
    console.log(data.results);
  }

  handleError(error) {
    console.log(error);
  }

  constructor(private serv: ImageService, private dialog: MatDialog, private store:Store<{cart:any}>) {
  }

  ngOnInit(): void {
  }
  searchImages(searchQuery) {
    this.searching = true;

    // this.store.dispatch(new UserActions.LoadUsers());
    
    this.serv.getImages().subscribe((data) => {
      this.handleSuccess(data);
      console.log(data)
    }
    );
  }
  navigateToLink(i): void {
    window.open(this.images[i].user.links.portfolio)
  }
  openDialog(i): void {
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '300px',
      height: '200px',
      data: this.images[i]
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }
  FavoritiesFunc() {
    this.imagesFound = false;
    this.Favorities = true;
    // this.FavData = this.serv.dataGetter();
    // this.FavData = [...new Set(this.FavData)]
    this.FavData = this.store.pipe(select('cart'))
    console.log(this.FavData)
  }
  backToSearch() {
    this.imagesFound = true;
    this.Favorities = false;
  }
  downloadFav(i) {
    this.FavoritiesFunc()
    this.toDataURL(this.FavData[i].imageUrl, function (dataUrl) {
      console.log(dataUrl)
      var a = document.createElement("a"); //Create <a>
      a.href = dataUrl; //Image Base64 Goes here
      a.download = "Image.png"; //File name Here
      a.click();
    })
  }
  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
}
