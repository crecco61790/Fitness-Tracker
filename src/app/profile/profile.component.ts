import { Component, OnInit } from '@angular/core';
import { Log, Entry, User } from '../models/log';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { ShareService } from '../services/share.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Me: User;

  constructor(
    private http: Http,
    private _Router: Router,
    public _Share: ShareService,
    public _Log: LogService
  ) { 
    //ensure user is logged in
    this.Me = _Log.Me;
    if(!this.Me){
      _Router.navigate(['/login']);
    }


  }

  ngOnInit() {
  }

}
