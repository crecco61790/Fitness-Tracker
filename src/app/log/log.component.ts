import { Component, OnInit } from '@angular/core';
import { Log, Entry, User } from '../models/log';
import { Router } from '@angular/router';
import { Http } from "@angular/http";


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  
  Model = new Log();
  Me = new User("Steve C");

  private _api = "http://localhost:8080/log";

  constructor(
    private http: Http,
    private _Router: Router
  ) { 

  }

  ngOnInit() {
  }

  postToLog(e: MouseEvent, date: string, musclegroup: string, workout: string, reps: string){
    e.preventDefault();
    this.Model.Entries.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: false});
    
    
  }

}
