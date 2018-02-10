var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.listen(3000, function() {
    console.log('Rest Api is on 3000 port!');
});