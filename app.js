var express = require('express');
var app = express();

var mongoose = require('mongoose');

var api = require('./routers/api');

// SO: mocked data:
var IvanMock = require('./mocks/simpleWorkerDoc');

// SO: need move localhost url to server.config.js
mongoose.connect('mongodb://localhost:27017');

// SO: don't need yet - Ivan already saved.
// IvanMock.save(function(err){
//     if (err) return console.log(err);
//     console.log('IvanMock saved!');
// });

app.use(api);

app.get('/', (req, res) => {
    res.send('Entry point');
});

app.use( (req, res, next) => {
    res.status(404).send('Sorry, cannot find anything by this route!');
});

app.listen(3000, () => {
    console.log('Rest Api is on 3000 port!');
});