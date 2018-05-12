import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Log, Entry, User } from '../models/log';

@Injectable()
export class ShareService {

  Share: Entry[];

  constructor() { 
    this.Share = [];
  }

}
