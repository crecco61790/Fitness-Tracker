import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Log, Entry, User } from '../models/log';

@Injectable()
export class ShareService {
  //array of shared entries accessible to all componenets
  Share: Entry[];

  constructor() { 
    this.Share = [];
  }

}
