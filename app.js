var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

var app = express();

// Middleware
var logger = function (req, res, next) {
    console.log('logging...');
    next();
}

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Path
app.use(express.static(path.join(__dirname, 'express-app')));

// Routes
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})