import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

  Share: {Date: string, MuscleGroup: string, Workout: string, Reps: string, UserName: string}[];

  constructor() { 
    this.Share = []
  }

}
