'use strict';
module.exports = function (app) {
    var player = require('../controllers/playerController');
    var user = require('../controllers/userController');

    // players Routes
    app.route('/player')
        .get(player.list_all_player)
        .post(player.create_a_player);


    app.route('/player/:id')
        .get(player.read_a_player)
        .patch(player.update_a_player)
        .delete(player.delete_a_player);

    app.route('/login')
        .post(user.login);
};