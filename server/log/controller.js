var express = require('express');
var Log = require('./model');

var app = express.Router();


var log = new Log();

module.exports = app

.get('/state', (req, res) => res.send(log))

.post('/entries', (req, res) => {
    console.log(req.body);
    
    try {
        log.LogEntry(req.body.Date, req.body.MuscleGroup, req.body.Workout, req.body.Reps, req.body.Share, req.body.UserName);
        res.send( { success: true } );            
    } catch (error) {
        res.status(403).send({ success: false, message: error.message });
    }
})

.post('/share', (req, res) => {
    console.log(req.body);
    
    try {
        log.ShareEntry(req.body.Date, req.body.MuscleGroup, req.body.Workout, req.body.Reps, req.body.Share, req.body.UserName);
        res.send( { success: true } );            
    } catch (error) {
        res.status(403).send({ success: false, message: error.message });
    }
})

.post('/test', (req, res) => {
    
    try {
        log.Test("Test Worked");
        res.send( { success: true } );            
    } catch (error) {
        res.status(403).send({ success: false, message: "Not Sure why?" });
    }
})