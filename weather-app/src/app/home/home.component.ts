import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: string;
  weatherData;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.apiData$.subscribe(weatherResponse => {
      this.weatherData = weatherResponse;
    });
  }

}
