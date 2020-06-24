import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weatherData;
  cityName = 'Hyderabad';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.fetchCityWeather('hyderabad')
      .subscribe(response => {
        this.weatherData = response;
        console.log(response);
        this.weatherService.setWeatherData(response);
      });
  }

  onCitySubmit(city) {
    this.weatherService.fetchCityWeather(city.value)
    .subscribe(response => {
      this.weatherData = response;
      console.log(response);
      this.cityName = city.value;
      this.weatherService.setWeatherData(response);
    }, error => {
      console.log(error);
    });
  }
}
