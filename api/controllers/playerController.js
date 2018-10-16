'use strict';

var mongoose = require('mongoose'),
    player = mongoose.model('players');

//  All players
exports.list_all_player = function (req, res) {
    player.find({}, function (err, player) {
        if (err)
            res.send(err);
        res.json(player);
    });
};

// Create a player
exports.create_a_player = function (req, res) {
    var new_player = new player(req.body);
    new_player.save(function (err, player) {
        if (err)
            res.status(400);
            res.send(err);
            return
        res.json({
            message: 'Player successfully added',
            newPlayerId: player._id            
        });
    });
};

// Find player by ID
exports.read_a_player = function (req, res) {
    player.findById(req.params.id, function (err, player) {
        if (err)
            res.send(err);
        res.json(player);
    });
};


// Update player
exports.update_a_player = function (req, res) {
    player.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, function (err, player) {
        if (err)
            res.send(err);
        res.json(player);
    });
};

// Delete player
exports.delete_a_player = function (req, res) {
    console.log(req.params)
    player.deleteOne({
        _id: req.params.id
    }, function (err, player) {
        if (err) {
            res.json(err);
            console.log(err);
            return
        }
        res.json({
            message: 'Player successfully deleted'
        });
    });
};