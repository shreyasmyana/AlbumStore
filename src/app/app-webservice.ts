import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})

export class WebServices{
    readonly WEBURL;
    constructor(private http:HttpClient){
        this.WEBURL="http://localhost:3000";
    }

    get(uri:string){
        console.log(uri);
        return this.http.get(`${this.WEBURL}/${uri}`);
    }
    
    post(formdata:any, path:string){
        console.log("in webservice",path,`${this.WEBURL}/${path}`);
        return this.http.post(`${this.WEBURL}/${path}`, formdata)
    }



}