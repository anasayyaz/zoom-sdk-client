import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ZoomMeetingComponent } from './zoom-meeting/zoom-meeting.component';
import { ZoomService } from './zoom.service';

@NgModule({
  declarations: [
    AppComponent,
    ZoomMeetingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ZoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
