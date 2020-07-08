import { Injectable } from '@angular/core';
import {WebServices} from '../app-webservice';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user:any;
  
  constructor(private service:WebServices) {

   }

  postUser(formData:any,path:string){
    console.log("In Auth Service",path);
    return this.service.post(formData,path);
  }

  authUser(formData:any, path:string) {
    return this.service.post(formData,path);
  }

}
