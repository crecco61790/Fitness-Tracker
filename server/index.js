const express = require('express')
const bodyParser = require('body-parser');

const servername = "localhost";
const port = 8080;

const simple = require('./simpleController');
const log = require('./log/controller');

var app = express()

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/simple', simple)
    .use('/log', log)
    .use('/', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();      
    })
    .listen(port);

console.log("running on http://" + servername + ":" + port)

