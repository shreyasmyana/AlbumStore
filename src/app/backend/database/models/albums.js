const mongoose = require('mongoose');
const { strict } = require('assert');

const albumSchema = mongoose.Schema({
    artist:{
        type: String},
    album:{
        name:{type:String},
        albumCover:{type:String},
        tracks:[{
            trackNumber:{type:Number},
            trackName:{type:String},
            trackPrice:{type:String}
        }],

    },
});

const albums = mongoose.model('albums',albumSchema);

module.exports = albums;