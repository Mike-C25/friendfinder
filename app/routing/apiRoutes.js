var path = require('path');
var friendArray = require('../data/friends.js');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {

        res.json(friendArray);

    })

    app.post("/api/friends", function(req, res) {
        //new friend generator part
        console.log(req.body);
        res.json(req.body);
        friendArray.push(req.body);
        console.log(friendArray);

    });
}