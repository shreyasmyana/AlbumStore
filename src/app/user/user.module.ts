import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './user.component';
import {UserDashboard} from './userdashboard.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
     UserComponent,
     UserDashboard
    ],
    imports:[
        FormsModule,
        RouterModule.forChild([
            {path:'user',component:UserComponent},
            {path:'userdashboard/:name',component:UserDashboard},
        ])
    ],
    
})

export class UserModule{}