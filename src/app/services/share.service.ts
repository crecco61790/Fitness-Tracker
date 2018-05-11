import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

  Share: {Date: string, MuscleGroup: string, Workout: string, Reps: string}[];

  constructor() { 
    this.Share = [
      {Date: "5/5/19", MuscleGroup: "Chest", Workout: "Bench", Reps: "10"},
      {Date: "6/6/66", MuscleGroup: "Arms", Workout: "Curls", Reps: "15"}
    ]
  }

}
