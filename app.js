var express = require('express');
var app = express();

var mongoose = require('mongoose');

var workers = require('./routers/workers');
var objects = require('./routers/objects');
var customers = require('./routers/customers');

// SO: mocked data:
var IvanMock = require('./mocks/simpleWorkerDoc');

// SO: need move localhost url to server.config.js
mongoose.connect('mongodb://localhost:27017');

// SO: don't need yet - Ivan already saved.
// IvanMock.save(function(err){
//     if (err) return console.log(err);
//     console.log('IvanMock saved!');
// });

app.use('/workers', workers);
app.use('/objects', objects);
app.use('/customers', customers);

app.get('/', (req, res) => {
    res.send('Entry point');
});

app.use( (req, res, next) => {
    res.status(404).send('Sorry, cannot find anything by this route!');
});

app.listen(3000, () => {
    console.log('Rest Api is on 3000 port!');
});