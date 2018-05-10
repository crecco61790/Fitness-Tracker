export class Log {

    Users: User[] = [];
}

export class Entry {
    Date: string = "5/10/18";
    MuscleGroup: string = "Chest";
    User: string = "Steve C";
    Workout: string = "10 Reps";
    Share: boolean;
}

export class User {
    Name: string;
    MyEntries: Entry[] = [];
