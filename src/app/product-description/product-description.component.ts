import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albums:any;
  albumId:string;
  errormsg:String;
  constructor(private pservice:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.albumId= this.route.snapshot.paramMap.get('albumId');
    
    this.pservice.getAlbum(this.albumId).subscribe(
      albums=>this.albums=albums);
    console.log(this.albums);
  }


}
