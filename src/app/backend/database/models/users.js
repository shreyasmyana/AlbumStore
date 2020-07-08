const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
    name:{type: String},
    emailId:{type:String},
    password:{type:String}
})

const users = mongoose.model('users',albumSchema)

module.exports=users;
