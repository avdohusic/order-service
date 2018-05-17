let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//User schema
let userSchema = Schema({
    name:{
        type: String,
        required: true
    },
    googleId:{
        type: String,
        required: false
    }
});

let User = module.exports = mongoose.model('users', userSchema);