import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
      ],
      imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild([
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        ]),        
      ],
})

export class AuthenticationModule { }