import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private api_key: string = '004cec9b7c88f5147cc4368e4f4fa39b';
  private ciudad: string = 'Santiago';
  private lang: string = 'es';
  private url: string = `https://api.openweathermap.org/data/2.5/weather`;

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    const url = `${this.url}?q=${this.ciudad}&appid=${this.api_key}&lang=${this.lang}`;
    return this.http.get(url);
  }
}