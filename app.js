var express = require('express');
var app = express();

var workers = require('./routers/workers');
var objects = require('./routers/objects');
var customers = require('./routers/customers');

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