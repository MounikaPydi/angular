import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  errorMessage: string;
  weatherData;
  subscription: Subscription;
  hasWeatherData = false;

  constructor(private weatherService: WeatherService) { }

  // ngOnInit() {
  //   this.weatherService.apiData$.subscribe(weatherResponse => {
  //     this.weatherData = weatherResponse;
  //   });
  // }

  ngOnInit() {
    console.log('calling ngoninit of home component');
    this.getWeatherData();
  }

  // getWeatherData() {
  //   console.log('calling getWeatherData() in home component');
  //   this.subscription = this.weatherService.getWeatherData().subscribe((response) => {
  //     console.log(response);
  //     this.hasWeatherData = true;
  //     this.weatherData = response;
  //     console.log(this.weatherData && this.hasWeatherData);
  //   }, error => {
  //     console.log('calling error in home component');
  //     this.hasWeatherData = false;
  //     this.weatherData = [];
  //     this.errorMessage = error.error.message;
  //     console.log(error.error.message);
  //   });
  // }


  getWeatherData() {
    console.log('calling getWeatherData() in home component');
    this.subscription = this.weatherService.getWeatherData().subscribe((incomingData) => {
      if (!incomingData.hasError) {
        console.log(incomingData.response);
        this.hasWeatherData = true;
        this.weatherData = incomingData.response;
      } else {
        console.log('calling error in home component');
        this.hasWeatherData = false;
        this.weatherData = [];
        this.errorMessage = incomingData.error.error.message;
        console.log(incomingData.error.error.message);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
