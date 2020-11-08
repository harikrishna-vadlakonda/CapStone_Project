const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    services: {type: String, required: true},
    name: {type: String, required: true},
    mobilenumber: {type: String, required: true},
    city: {type: String, required: true},
    gender: {type: String, required: true},
    description: {type: String, },
    image: {type: String, required: true},
    serviceusedby : {type: mongoose.Types.ObjectId, ref: 'User'},
    price :{type : Number, default : 0},
    createdOn: {type: String, required: true},
});

module.exports = mongoose.model('Services', serviceSchema);
