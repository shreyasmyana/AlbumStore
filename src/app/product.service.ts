import { Injectable, ErrorHandler } from '@angular/core';
import {WebServices} from './app-webservice';
import {Observable, throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _albumUrl:any ='../assets/album.json';



  constructor(private service:WebServices) { }

  

  getAlbums():Observable<any>{
    return this.service.get('albums');
  }
  
  getAlbum(albumId:string):Observable<any>{
    return this.service.get(`albums/${albumId}`);
  }

  postFile(formdata:any,path:string){
    return this.service.post(formdata,path);
  }

  postAlbum(formdata:any,path:string){
    return this.service.post(formdata,path);
  }

}
