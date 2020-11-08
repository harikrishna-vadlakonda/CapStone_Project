const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    mobilenumber: {type: Number, required: true, unique: true},
    email : {type: String, required: true, unique: true},
    image: {type: String, default: "ff"},
    gender: {type: String, required: true},
    city: {type: String, required: true}, 
    password: {type: String, required: true, minlength: 6},
    joinedOn: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);