var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

var app = express();

// Middleware Logger
var logger = function (req, res, next) {
    console.log('logging...');
    next();
}

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
    {
        name: 'Mike',
        age: 29
    },
    {
        name: 'Jeff',
        age: 22
    },
    {
        name: 'Bill',
        age: 52
    }
]

// Routes
app.get('/', function (req, res) {
    var title = 'Customers';
    res.render('index', {
        title: 'Customers',
        users: users
        });
    // res.send('Hello World');
});

app.get('/', function (req, res) {
    res.json(people);
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