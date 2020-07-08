const express = require('express');
const app = express();
const albums = require('./database/models/albums');
const bodyparser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const users = require('./database/models/users');

const mongoose = require('./database/mongoose');

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null,'uploads')
    },
    filename: (req,file,callback)=>{
        callback(null,`${file.originalname}`)
    }
    })

var upload = multer({storage:storage})

app.get('/albums', (req, res)=>{
    albums.find({})
    .then(albums => res.send(albums))
    .catch((error)=>console.log(error));
});
app.get('/albums/:albumId',(req,res)=>{
    albums.findById({_id:req.params.albumId})
    .then(album=>res.send(album))
    .catch(error=>console.log(error));    
});

app.post('/file',upload.single('file'),(req,res,next)=>{
    const file = req.file
    
    if(!file){
        const error = new Error("No File")
        error.httpStatusCode=404
        return next(error)
    }
    res.send(file)
});

app.post('/album',(req,res)=>{
console.log(req.body)
var album =new albums()
console.log(req.body)
album.artist=req.body.artistName;
album.album.name=req.body.albumName;
album.album.albumCover=req.body.albumCover;
album.album.tracks=req.body.tracks;
album.save((err,albuminserted)=>{
    if(err){
        console.log(err);
    }
    else{
        res.send(albuminserted);
    }
})
});

app.post('/user',(req,res)=>{
    console.log("hi");
    console.log(req.body);
    var user  = new users()
    user.name=req.body.name;
    user.emailId=req.body.email;
    user.password=req.body.password;
    user.save((err,userinserted)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(userinserted);
        }
    })
});

app.post('/authuser',(req,res)=>{
    console.log(req.body)
    users.findOne({'emailId':req.body.emailId})
    .then((user)=>{
        if(user){
        if(user.emailId==req.body.emailId && user.password==req.body.password){
            res.send({"msg":"You have been successfully Logged in","error":"false","name":user.name})
        }
        else{
            res.send(null)
        }
    }
    else{
        res.send(null)
    }

    })
    .catch(err=>{console.log(err)})
    
});

app.listen(3000, ()=>console.log("Server is Connected on port 3000"))
