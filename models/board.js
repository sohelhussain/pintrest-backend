
const mongoose = require('mongoose');


const boardSchema =  mongoose.Schema({
    class:{
        required: true,
        type: String,
        trim: true
    },
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    pins:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }]
})

module.exports = mongoose.model('board', boardSchema);