var express = require('express');
var Log = require('./model');

var app = express.Router();


var log = new Log();

module.exports = app