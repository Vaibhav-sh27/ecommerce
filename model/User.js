const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    img:{
        type: String,
        trim:true
    },
    price:{
        type: Number,
        min:0,
        required:true
    },
    desc:{
        type: String,
        trim:true
    },

});

let User = mongoose.model('User', userSchema);
module.exports = User;