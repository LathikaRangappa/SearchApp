import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  searchQuery:string;
  Favorities:boolean= false;
  FavData: any;

  handleSuccess(data) {
    this.searching = false;
    this.imagesFound = true;
    this.images = data.results;
    console.log(data.results);
  }

  handleError(error){
  console.log(error);
  }

  constructor(private serv:ImageService,private dialog: MatDialog) {
   }

  ngOnInit(): void {
  }
  searchImages(searchQuery){
    this.searching = true;
    this.serv.getImages(searchQuery).subscribe((data)=>{
    this.handleSuccess(data);
    console.log(data)
    }
    );
  }
 
openDialog(i):void {
    const dialogRef=this.dialog.open(DialogPopupComponent , {   
        width:'300px',
        height:'200px',
        data:this.images[i]
    });
    dialogRef.afterClosed().subscribe(result=> {
      console.log(result)
    });
}
  FavoritiesFunc(){
    this.imagesFound= false;
    this.Favorities = true;
    this.FavData = this.serv.dataGetter();
    this.FavData = [...new Set(this.FavData)]
  }
  backToSearch(){
    this.imagesFound= true;
    this.Favorities = false;
  }
  downloadFav(i){
    console.log(i)
    this.FavoritiesFunc()
    console.log(this.FavData[i])
    window.open(this.FavData[i].links.download)
  }
}
