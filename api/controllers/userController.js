'use strict';

var mongoose = require('mongoose'),
user = mongoose.model('user');
 
//  
exports.login = function (req, res) {
    user.find({username: req.param(username)}, function (err, player) {
        if (err)
            res.send(err);
        res.json(player);
    });
};