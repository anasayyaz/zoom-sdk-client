import { Component } from '@angular/core';
import { ZoomService } from '../zoom.service';

@Component({
  selector: 'app-zoom-meeting',
  templateUrl: './zoom-meeting.component.html',
  styleUrls: ['./zoom-meeting.component.css']
})
export class ZoomMeetingComponent {
  constructor(private zoomService: ZoomService) {}

  createMeeting() {
    const hostEmail = 'anas.ayyazz@gmail.com';  // Replace with the host email
    const topic = 'Test Zoom Meeting';
    const duration = 60;
    const startTime = new Date().toISOString(); // ISO formatted start time

    // Call the API to create a meeting
    this.zoomService.createMeeting(hostEmail, topic, duration, startTime).subscribe(response => {
      if (response && response.success) {
        // Open the Zoom meeting link in a new tab
        window.open(response.meetingLink, '_blank');
      }
    }, error => {
      console.error('Error creating meeting', error);
    });
  }
}
