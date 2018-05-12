import { Component, OnInit } from '@angular/core';
import { Share, Entry, User } from '../models/share';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { ShareService } from '../services/share.service';
import { LogService } from '../services/log.service';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  Me : User;

  private _api = "http://localhost:8080/share";

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

}
