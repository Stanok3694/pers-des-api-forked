const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const entry = require('./routers/entry');

// SO: need move localhost url to server.config.js
mongoose.connect('mongodb://localhost:27017');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());
app.use(bodyParser.raw());

app.use(entry);

app.get('/', (req, res) => {
    res.send('Entry point');
});

app.use((req, res, next) => {
    res.status(404).send('Sorry, cannot find anything by this route!');
});

app.listen(3001, () => {
    console.log('Rest Api is on 3000 port!');
});