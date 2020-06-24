import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class WeatherService{

  private apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();

  constructor(private http: HttpClient) { }

  fetchCityWeather(city: string): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f2f358f6d90d53d1b4971943c73c3068`);
  }

  setWeatherData(weatherData) {
    this.apiData.next(weatherData);
  }
}
