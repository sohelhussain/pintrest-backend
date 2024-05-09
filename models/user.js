const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pinejs');

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
        type: Date,
        required: true,
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
        ref: "post"
    }],
    board:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "board"
    }],
})

module.exports = mongoose.model('user', userSchema);