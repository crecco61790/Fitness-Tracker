var express = require('express');
var Log = require('./model');

var app = express.Router();


var log = new Log();

module.exports = app
//returns model
.get('/state', (req, res) => res.send(log))
//returns array of shared entries
.get('/share', (req, res) => res.send(log.sharedEntries))
//returns arra of logged entries
.get('/entries', (req, res) => res.send(log.Entries))

//posts users entry to array of logged entries
.post('/entries', (req, res) => {
    console.log(req.body);
    
    try {
        log.LogEntry(req.body.Date, req.body.MuscleGroup, req.body.Workout, req.body.Reps, req.body.Share, req.body.UserName);
        res.send( { success: true } );            
    } catch (error) {
        res.status(403).send({ success: false, message: error.message });
    }
})
//posts users entry to array of shared entries
.post('/share', (req, res) => {
    console.log(req.body);
    
    try {
        log.ShareEntry(req.body.Date, req.body.MuscleGroup, req.body.Workout, req.body.Reps, req.body.Share, req.body.UserName);
        res.send( { success: true } );
    } catch (error) {
        res.status(403).send({ success: false, message: error.message });
    }
})
