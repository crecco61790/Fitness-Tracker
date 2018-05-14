import { Component, OnInit } from '@angular/core';
import { Share, Entry, User } from '../models/share';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { ShareService } from '../services/share.service';
import { LogService } from '../services/log.service';
import { Observable } from 'rxjs/Observable';
import {debounceTime, distinctUntilChanged, filter, map, merge, switchMap} from 'rxjs/operators';



@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  Me : User;
  Share = new Share();

  private _api = "http://localhost:8080/share";

  constructor(
    private http: Http,
    private _Router: Router,
    public _Share: ShareService,
    public _Log: LogService

  ) { 
    this.Me = _Log.Me;
    this.http.get('http://localhost:8080/log/share')
    .subscribe(data=> this._Share.Share = data.json());

    setTimeout(()=> this._Share.generateUsers(), 1000);
    ;
    /*var i: number;
    for(i=0; i<_Share.Share.length; i++){
      this._Share.ShareUsers.push(this._Share.Share[i].UserName)
    }
    console.log(this._Share.ShareUsers);*/
    
    if(!this.Me){
      _Router.navigate(['/login']);
    }


  }

  ngOnInit() {
  }
  search = (text: Observable<string>) => 
  text.pipe(
    map(x=> this._Share.ShareUsers )
  )
}
