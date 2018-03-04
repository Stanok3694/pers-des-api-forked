const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dbConfig = require('./db.config');
const entry = require('./routers/entry');

// SO: config for prod
mongoose
    .connect(dbConfig.mongoDbUrl)
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

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Rest Api is live on ${port} port!`);
});