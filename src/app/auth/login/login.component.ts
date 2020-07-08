import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  constructor(private service:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(formData:NgForm){
    if(formData.status=="VALID"){
    console.log(formData.value)
    this.service.authUser(formData.value,'authuser').subscribe(
      (res)=>{
        if(res){
          alert("successfully logged in")
          this.user=res;
          this.router.navigate([`userdashboard/${this.user.name}`])
        }
        else{
          alert ("check ID or password")
        }
      },
      (err)=>{console.log(err)}
    );
  }else{
   alert("Please check your email ID OR Password") 
  }
}
  
}
