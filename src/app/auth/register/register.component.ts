import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthenticationService, private route:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.route.navigate(['login'])
  }

  onSubmit(formData:NgForm){
    if(formData.status=="INVALID"){
      alert("Please check Input")
      
    }
    else{
      console.log("In Component",formData.value)
      this.auth.postUser(formData.value,'user').subscribe(
        (res)=>{
          alert("SignUP Successful");
          this.route.navigate(['login'])
      },
        (err)=>{console.log(err)}
      );
    }
    
  }

}
