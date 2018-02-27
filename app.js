const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const entry = require('./routers/entry');

// SO: need move localhost url to server.config.js

const mongoDbUrl = 'mongodb://admin:admin001@ds151348.mlab.com:51348/heroku_1jn14n2f'; 
// || 'mongodb://localhost:27017';

mongoose
    .connect(mongoDbUrl)
    .then(response => {
        console.log(`Successfully connected with MongoDB`)
    })
    .catch(e => {
        console.log('Cannot connect with MongoDB');
    });

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
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

const port = process.env.port || 3001;

app.listen(port, () => {
    console.log('Rest Api is live on 3001 port!');
});