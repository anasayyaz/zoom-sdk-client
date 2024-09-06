import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {
  private apiUrl = 'http://localhost:3000/create-meeting-web'; // Backend API URL

  constructor(private http: HttpClient) {}

  createMeeting(hostEmail: string, topic: string, duration: number, startTime: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { hostEmail, topic, duration, startTime };
    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
