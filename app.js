const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const entry = require('./routers/entry');

// SO: need move localhost url to server.config.js
mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser.json());
app.use(entry);

app.get('/', (req, res) => {
    res.send('Entry point');
});

app.use((req, res, next) => {
    res.status(404).send('Sorry, cannot find anything by this route!');
});

app.listen(3000, () => {
    console.log('Rest Api is on 3000 port!');
});