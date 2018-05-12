var express = require('express')
var app = express()

const servername = "localhost";
const port = 8080;

const simple = require('./simpleController');
const log = require('./log/controller');



app
    .use('/simple', simple)
    .use('/log', log)
    .listen(port);

console.log("running on http://" + servername + ":" + port)