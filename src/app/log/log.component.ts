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
    Model= new Log();
    
  
  private _api = "http://localhost:8080/log";

  constructor(
    private http: Http,
    private _Router: Router,
    public _Share: ShareService,
    public _Log: LogService
  ) {
   //returns all logged entries from server and stores at component level
    this.http.get('http://localhost:8080/log/entries')
    .subscribe(data=> this.Model.Entries = data.json());
    console.log(this.Model);

        
    //ensures user is logged in
    this.Me = _Log.Me;
    if(!this.Me){
      _Router.navigate(['/login']);
    }
    //asynchronous http requires a delay
    setTimeout(()=> this.pushMeToLogService(this.Model), 1000);

    console.log(this.Model);
  }

  ngOnInit() {
  }
  //pushes componenet log to service for global availability
  pushMeToLogService(Model: Log){
    this._Log.Entries=[];
    var i: number;
    //ensures log only displays users entries not all entries
    for(i=0; i<Model.Entries.length; i++){
      if(Model.Entries[i].UserName==this.Me.Name){
    this._Log.Entries.push(Model.Entries[i]);
      }
    }
    console.log(this._Log.Entries);
  }
  
  postToLog(e: MouseEvent, date: string, musclegroup: string, workout: string, reps: string){
    e.preventDefault();
    //ensures complete entries
    if(date!="" && musclegroup!="" && workout!="" && reps!=""){
    //adds and displays entry to log
    this._Log.Entries.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: false, UserName: this._Log.Me.Name})
    //saves entry to server
    this.http.post(this._api + "/entries", {Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: false, UserName: this._Log.Me.Name}).subscribe();    
    }
  }

  postToShare(e: MouseEvent, date: string, musclegroup: string, workout: string, reps: string){
    e.preventDefault();
    //ensures complete entries
    if(date!="" && musclegroup!="" && workout!="" && reps!=""){
    //adds entry to share componenet and displays
    this._Share.Share.push({Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, UserName: this._Log.Me.Name, Share: true})  
    //posts shared entries to server
    this.http.post(this._api + "/share", {Date: date, MuscleGroup: musclegroup, Workout: workout, Reps: reps, Share: true, UserName: this._Log.Me.Name}).subscribe();    
  
    }
  }
}