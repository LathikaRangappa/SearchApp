import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private query: string;
  data: any;
  favArray: any = [];
  
  constructor(private http:HttpClient) { }

  getImages(){
    // return this.http.get("https://api.unsplash.com/search/photos?query="+"mango"+"&client_id=i0IW-tfZm9qtQ4aiTni5-__pJS9Tu-IUTaIVYxTKZ0U");
    return this.http.get("./assets/response.json")
  }
  dataSetter(obj:any){
    this.favArray.push(obj)
    this.data=this.favArray;
    }
  
  dataGetter():any{
      return this.data;
    }
}
