import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  image;
  imgpath;
  trackno=1;
  tracks=[];
  displayfields;
  albumForm:FormGroup;
  tracknumber:string; trackname:string; trackprice:string;
  constructor(private service:ProductService) { 
    
  }

  ngOnInit(): void {
    this.displayfields = new Array<any>(this.trackno);
    
  }
  generatetracks(){
    this.displayfields = new Array<any>(this.trackno);
    
  }
  selectImage(event){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.image=file;
    }
  }

  onUpload(){
    const formdata = new FormData()
    console.log(this.image)
    formdata.append('file',this.image);
    this.service.postFile(formdata,'file').subscribe(
      (res)=>console.log(JSON.stringify(res)),
      (error)=>console.log(error)
    )
    
  }
 
 onSubmit(form:NgForm){
  form.value.image=`/app/backend/uploads/${this.image.name}`
  for (var i=0 ; i < this.trackno; i++){
    this.tracks.push({trackNumber:i+1,trackName:(<HTMLInputElement>document.getElementById("trackname"+i)).value,trackPrice:(<HTMLInputElement>document.getElementById("trackprice"+i)).value});
  }
  
  var data ={
    'artistName':form.value.artistName,
    'albumName':form.value.albumName,
    'albumCover':form.value.image,
    'tracks':this.tracks
}
console.log(data)
 // console.log(JSON.stringify(form.value))
  this.service.postAlbum(data,'album').subscribe(
   (res)=>console.log("IN User Component",res),
    (err)=>console.log(err)
  )
 }
}
