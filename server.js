var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var friendArray = require('./app/data/friends.js');

// var peopleArray = require('app/data/peopleArray');


var app = express();
var port = process.env.PORT || 3000;


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// require("./app/data/friends")(app);


app.listen(port, function(err) {
    if (err) throw err;
    console.log(`Listening on port: ${port}\n`)
})