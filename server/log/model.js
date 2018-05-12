var axios = require("axios");

function Log() {
    this.User;

    this.Entries = [];
    this.sharedEntries = [];

    this.LogEntry = (date, musclegroup, workout, reps, share, username) => {
        this.Entries.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: share, UserName: username });
    }
    this.ShareEntry = (date, musclegroup, workout, reps, share, username) => {
        this.sharedEntries.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: share, UserName: username });
    }
    

}

module.exports = Log;