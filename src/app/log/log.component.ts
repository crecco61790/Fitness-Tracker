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
  
  Me : User;

  private _api = "http://localhost:8080/log";

  constructor(
    private http: Http,
    private _Router: Router,
    public _Share: ShareService,
    public _Log: LogService
  ) { 

    this.Me = _Log.Me;
    if(!this.Me){
      _Router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

  postToLog(e: MouseEvent, date: string, musclegroup: string, workout: string, reps: string){
    e.preventDefault();
    if(date!="" && musclegroup!="" && workout!="" && reps!=""){
    this._Log.Entries.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: false, UserName: this._Log.Me.Name})
    this.http.post(this._api + "/entries", {Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: false, UserName: this._Log.Me.Name}).subscribe();    
    }
  }

  postToShare(e: MouseEvent, date: string, musclegroup: string, workout: string, reps: string){
    e.preventDefault();
    if(date!="" && musclegroup!="" && workout!="" && reps!=""){
    this._Share.Share.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, UserName: this._Log.Me.Name, Share: true})  
    this.http.post(this._api + "/share", {Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: true, UserName: this._Log.Me.Name});    
  
    }
  }
}