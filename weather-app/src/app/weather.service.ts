import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService{

//   private apiData = new BehaviorSubject<any>(null);
//   public apiData$ = this.apiData.asObservable();

//   constructor(private http: HttpClient) { }

//   fetchCityWeather(city: string): Observable<any> {
//     return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f2f358f6d90d53d1b4971943c73c3068`);
//   }

//   setWeatherData(weatherData) {
//     this.apiData.next(weatherData);
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class WeatherService{

  private subject = new BehaviorSubject<any>({hasError: false});
  // private subject = new Subject<any>();
  constructor(private http: HttpClient) { }

  fetchCityWeather(city: string) {
    this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f2f358f6d90d53d1b4971943c73c3068`)
      .subscribe(response => {
        console.log('reponse from http request', response);
        this.subject.next({hasError: false, response});
      }, error => {
        console.log('error from http request', error);
        this.subject.next({hasError: true, error});
      });
  }

  getWeatherData() {
    console.log(this.subject);
    return this.subject.asObservable();
  }
}
