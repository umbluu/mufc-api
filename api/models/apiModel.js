'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var playerSchema = new Schema({
    id: Number,
    name: String,
    position: String,
    skills: String,
    shirtNumber: { type: Number, min: 1, max: 99 },
    status: Number,
},
{
    versionKey: false
});

module.exports = mongoose.model('players', playerSchema);