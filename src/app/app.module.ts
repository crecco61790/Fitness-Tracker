import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LogComponent } from './log/log.component';
import { ShareComponent } from './share/share.component';
import { LoginComponent } from './login/login.component';

import { ShareService } from './services/share.service';
import { LogService } from './services/log.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    LogComponent,
    ShareComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'log', component: LogComponent},
      { path: 'share', component: ShareComponent},
      { path: 'login', component: LoginComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'}
  ])

  ],
  providers: [ShareService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
