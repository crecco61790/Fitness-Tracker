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

  private _api = "http://localhost:8080/log";

  constructor(
    private http: Http,
    private _Router: Router
  ) { 

  }

  ngOnInit() {
  }

  postToLog(e: MouseEvent, Date: string){
    this.Model.Dates.push({Date: Date});
    
    
  }

}
