const mongoose = require('mongoose');


const postSchema =  mongoose.Schema({
    title:{
        required: true,
        type: String,
        trim: true
    },
    description:{
        trim: true,
        type: String,
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    board:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "board"
    }]
})

module.exports = mongoose.model('post', postSchema);