import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthWebServiceService {
  readonly WEBURL;
  constructor(private http : HttpClient) {
    this.WEBURL="http://localhost:3000";
   }

  get(formData:any,path:String){
    return this.http.get(`${this.WEBURL}/${path}`,formData);
  }

  post(formdata:any, path:string){
    console.log("in webservice",path,`${this.WEBURL}/${path}`);
    return this.http.post(`${this.WEBURL}/${path}`, formdata)
}

}
