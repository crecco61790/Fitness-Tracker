import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Log, Entry, User } from '../models/log';
import { Router } from '@angular/router';
import { ShareService } from './share.service';

@Injectable()
export class LogService {

  Me: User;

  constructor(private http: Http, private _Share: ShareService, private _Router: Router) {

   }
   login(name: string, password: string){
    if(password == ''){
        // Log the user in
        this.Me = { Name: name };
        this._Router.navigate(['/log']);
    }
  }

}




