export class Log {

    Entries: Entry[]=[];

    Users: User;
    
    
}

export class Entry {
    public Date: string;
    public MuscleGroup: string;
    public Workout: string;
    public Reps: string;
    public UserName: string;
    public Share: boolean;

    constructor(Date: string, MuscleGroup: string, Workout: string, Reps: string, UserName: string){
        this.Date = Date;
        this.MuscleGroup = MuscleGroup;
        this.Workout = Workout;
        this.Reps = Reps;
        this.UserName = UserName;
        this.Share = false;
    }
}

export class User {
    Name: string;
constructor(){
    this.Name;
    }
}

