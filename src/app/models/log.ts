export class Log {

    Dates: Date[] = [{Date: "5/5/18"}];

    Entries: Entry[]=[
        {Date: "5/5/18", MuscleGroup: "Chest", Workout: "Bench", Reps: "10", Share: false},
        {Date: "5/6/18", MuscleGroup: "Arms", Workout: "Curls", Reps: "15", Share: false}

    ];

    Users: User[] = [
        {Name: "Matt", Height: "Tall", Weight: "Fat" },
        {Name: "John", Height: "short", Weight: "Thin"}
    ];
}

export class Entry {
    public Date: string;
    public MuscleGroup: string;
    public Workout: string;
    public Reps: string;
    public Share: boolean;

    constructor(Date: string, MuscleGroup: string, Workout: string){
        this.Date = Date;
        this.MuscleGroup = MuscleGroup;
        this.Workout = Workout;
        this.Share = false;
    }
}

export class User {
    Name: string;
    Height: string;
    Weight: string;
constructor(Name: string){
    this.Name = Name;
}
}

export class Date {
    Date: string;

constructor(Date: string){
    this.Date = Date;
}

}