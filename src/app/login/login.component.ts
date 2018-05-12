import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Log: LogService, private _Share: ShareService) { }

  ngOnInit() {
  }

  login(name: string, password: string){
    this._Log.login(name, password);
}

}
