import { Component, OnInit } from '@angular/core';
import { Log, Entry, User } from '../models/log';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { ShareService } from '../services/share.service';
import { LogService } from '../services/log.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  
  Model = new Log();
  Me = new User();

  private _api = "http://localhost:8080/log";

  constructor(
    private http: Http,
    private _Router: Router,
    public Share: ShareService,
    public _Log: LogService
  ) { 

  }

  ngOnInit() {
  }

  postToLog(e: MouseEvent, date: string, musclegroup: string, workout: string, reps: string){
    e.preventDefault();
    if(date!="" && musclegroup!="" && workout!="" && reps!=""){
    this.Model.Entries.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: false, UserName: this._Log.Me.Name});    
    }
  }

  postToShare(e: MouseEvent, date: string, musclegroup: string, workout: string, reps: string){
    e.preventDefault();
    if(date!="" && musclegroup!="" && workout!="" && reps!=""){
    this.Share.Share.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, UserName: this._Log.Me.Name});  
    
    }
  }
}