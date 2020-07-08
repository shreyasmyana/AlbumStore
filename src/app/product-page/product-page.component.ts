import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  albums:any[]=[];
  filteredalbums:any[];
  _searchBy:string="";
  constructor(private pservice:ProductService) { }
  
  ngOnInit(): void {
    this.pservice.getAlbums()
        .subscribe(albums => {
          this.albums=albums;
        this.filteredalbums=albums});
  }

  get searchBy():string{
    return this._searchBy; 
  }
  set searchBy(data:string){
    this._searchBy=data;
    console.log(data);
    this.filteredalbums=this.searchBy?
    this.performFilter(this.searchBy):this.albums;
    console.log(this.filteredalbums)

  }
  performFilter(filterby:string):any[]{
    console.log("*IN Perform Filter*",filterby);
    filterby=filterby.toLocaleLowerCase();
    return this.albums.filter((album:any)=>{
      return album.album.name.toLocaleLowerCase().indexOf(filterby) !== -1 
    })
  }
  
  
  

}
