'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    id: Number,
    name: String,
    username: String,
    password: String
},
{
    versionKey: false
});

module.exports = mongoose.model('user', userSchema);