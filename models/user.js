const mongoose = require('mongoose');
mongoose.connect('mongodb://1270.0.0:27017/pinejs');

const userSchema =  mongoose.Schema({
    email:{
        required: true,
        type: String,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    birthday:{
        type: Number,
        rquired: true,
    },
    firstname:{
        trim: true,
        type: String,
    },
    lastname:{
        trim: true,
        type: String,
    },
    username:{
        trim: true,
        type: String,
    },
    about:{
        trim: true,
        type: String,
    },
    profil:{
        trim: true,
        type: String,
    },
    website:{
        trim: true,
        type: String,
    },
    pins:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: post
    }],
})

module.exports = mongoose.model('user', userSchema);