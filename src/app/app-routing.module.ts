import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProductPageComponent} from './product-page/product-page.component';
import {ProductDescriptionComponent} from './product-description/product-description.component';

const routes: Routes = [
  {path:'welcome',component:ProductPageComponent },
  {path:'album', component:ProductDescriptionComponent},
  {path:'album/:albumId', component:ProductDescriptionComponent},
  {path:'',redirectTo:'welcome',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
