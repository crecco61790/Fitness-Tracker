export class Log {

    Dates: Date[] = [{Date: "5/5/18"}];

    Entries: Entry[]=[];

    Users: User[] = [];
}

export class Entry {
    public Date: string;
    public MuscleGroup: string;
    public Workout: string;
    public Reps: string;
    public Share: boolean;

    constructor(Date: string, MuscleGroup: string, Workout: string, Reps: string){
        this.Date = Date;
        this.MuscleGroup = MuscleGroup;
        this.Workout = Workout;
        this.Reps = Reps;
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