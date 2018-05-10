export class Log {

    Users: User[] = [];
    SharedEntries: Entry[] = [];
}

export class Entry {
    Date: string;
    MuscleGroup: string;
    User: string;
    Workout: string;
    Share: boolean;
}

export class User {
    Name: string;
    LoggedEntries: Entry[] = [];
}