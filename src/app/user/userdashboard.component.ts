import {Component, Input, OnInit} from '@angular/core';
import {LoginComponent} from '../auth/login/login.component';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector:'app-userdashboard',
    templateUrl:'./userdashboard.component.html',
    styleUrls:['./userdashboard.component.css']
}
)

export class UserDashboard implements OnInit{
    constructor(private route:ActivatedRoute){}
    name:any;

    ngOnInit(){
        this.name=this.route.snapshot.paramMap.get('name');
    }




}