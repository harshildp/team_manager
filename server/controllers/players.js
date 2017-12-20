var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    getAll: function (req, res) {
        Player.find({}, function (err, players) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(players);
                res.json(players);
            }
        });
    },
    create: function (req, res) {
        var player = new Player(req.body);
        player.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('successfully created a player');
                return res.json(player);
            }
        });
    },
    delete: function (req, res) {
        console.log(req.params)
        Player.remove({_id: req.params.id}, function (err) {
            if (err) {
                console.log(err);
            } else {
                return res.json({Deleted: true});
            }
        });
    },
    update: function (req, res) {
        Player.findOne({_id:req.body.playerId}, function(err, result) {
            status = result.status;
            status[req.body.gameNum-1] = req.body.newStatus;
            result.update({status: status}, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    return res.json({Updatedstatus: true});
                }
            })
        })
    }
};