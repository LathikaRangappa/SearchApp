import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private query: string;
  data: any;
  favArray: any = [];
  
  constructor(private http:HttpClient) { }

  getImages(searchQuery:string){
    console.log(searchQuery)
    return this.http.get("https://api.unsplash.com/search/photos?query="+searchQuery+"&client_id=i0IW-tfZm9qtQ4aiTni5-__pJS9Tu-IUTaIVYxTKZ0U");
  }
  dataSetter(obj:any){
    this.favArray.push(obj)
      this.data=this.favArray;
    }
  
  dataGetter():any{
      return this.data;
    }
 
}
