import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { LogComponent } from './log/log.component';
import { ShareComponent } from './share/share.component';


@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    HomeComponent,
    MessagesComponent,
    NavComponent,
    ProfileComponent,
    LogComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
