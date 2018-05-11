import { Component, OnInit } from '@angular/core';
import { Log, Entry, User } from '../models/log';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { ShareService } from '../services/share.service';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  
  private _api = "http://localhost:8080/share";

  constructor(
    private http: Http,
    private _Router: Router,
    public Share: ShareService
  ) { 

  }

  ngOnInit() {
  }

}
