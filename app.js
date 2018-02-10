var express = require('express');
var app = express();

var workers = require('./routers/workers');

app.use('/workers', workers);

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.use(function(req, res, next) {
    res.status(404).send('Sorry, cannot find that resource!');
});

app.listen(3000, function() {
    console.log('Rest Api is on 3000 port!');
});