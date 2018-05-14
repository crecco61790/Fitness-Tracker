import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Log, Entry, User } from '../models/log';

@Injectable()
export class ShareService {
  //array of shared entries accessible to all componenets
  Share: Entry[];
  ShareUsers: string[];

  constructor() { 
    this.Share = [];
    this.ShareUsers =[];
  }
generateUsers(){
  var i: number;
  for(i=0; i<this.Share.length; i++){
    if(!this.ShareUsers.includes(this.Share[i].UserName)){
          this.ShareUsers.push(this.Share[i].UserName)
    }
  }
  console.log(this.ShareUsers);
}

}
