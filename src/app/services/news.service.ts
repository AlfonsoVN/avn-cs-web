import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'ff09a8a7328e447e8d5213fbcc3163e4'; // 🔹 Sustituye con tu API Key real
  private apiUrl = `https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
