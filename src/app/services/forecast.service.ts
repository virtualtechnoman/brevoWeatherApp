import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  apiKey = environment.openweathermap.api;
  constructor(private http: HttpClient) {}

  getForecastTillDate(lat: number, lon: number): Observable<any> {
    const url = `forecast/?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`;
    return this.http.get(this.baseUrl + url).pipe((data) => data);
  }

  getCurrentCondition(lat: number, lon: number) {
    const url = `weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`;
    return this.http.get(this.baseUrl + url).pipe((data) => data);
  }
}