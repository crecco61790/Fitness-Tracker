import { Component, OnInit } from '@angular/core';
import { Log, Entry, User } from '../models/log';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { ShareService } from '../services/share.service';


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
    private _Router: Router,
    public Share: ShareService
  ) { 

  }

  ngOnInit() {
  }

  postToLog(e: MouseEvent, date: string, musclegroup: string, workout: string, reps: string){
    e.preventDefault();
    if(date!="" && musclegroup!="" && workout!="" && reps!=""){
    this.Model.Entries.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: false});
    this.Share.Share.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, UserName: this.Me.Name});  
    }
  }

  postToShare(e: MouseEvent, date: string, musclegroup: string, workout: string, reps: string){
    e.preventDefault();
    this.Share.Share.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, UserName: this.Me.Name});  
  }
}
