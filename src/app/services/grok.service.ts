import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrokService {

  private apiUrl = 'http://127.0.0.1:5001/api/chat';  // URL de tu backend Flask

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    return this.http.post(this.apiUrl, { message });
  }
}
