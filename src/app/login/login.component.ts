import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { ShareService } from '../services/share.service';

declare var googleyolo: any;
declare var window: any;

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

googlelogin(){
  googleyolo.hint({
      supportedAuthMethods: [
      "https://accounts.google.com"
      ],
      supportedIdTokenProviders: [
          {
              uri: "https://accounts.google.com",
              clientId: "127811445743-8uo1b7vbretscar7t4kmuqiu8mhq04a5.apps.googleusercontent.com"
          }
      ]
  }).then((credentials: any) =>{
      this._Log.oAuthLogin(credentials.displayName, credentials.idToken);
      console.log(credentials);
  })
}

}
