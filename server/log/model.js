var axios = require("axios");

function Log() {
    //current user
    this.User;
    //users logged entries
    this.Entries = [];
    //users shared entries
    this.sharedEntries = [];
    //pushes users entries to log
    this.LogEntry = (date, musclegroup, workout, reps, share, username) => {
        this.Entries.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: share, UserName: username });
    }
    //pushers users public entries
    this.ShareEntry = (date, musclegroup, workout, reps, share, username) => {
        this.sharedEntries.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: share, UserName: username });
    }
    

}

module.exports = Log;