import { Component, OnInit } from '@angular/core';
import { ConverterPipe } from './converter/converter.pipe';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'meteo-app';
  lat: any;
  lon: any;

  currentWeather: any;
  hourlyWeather: any;
  weatherDescription!: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getPosition();
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.lat = position.coords.latitude;

        this.lon = position.coords.longitude;
        this.getWeather();
        this.getHour();
      },
      (error) => {
        console.error(error);
      },
      {
        timeout: 500,
        maximumAge: 10000,
      }
    );
  }

  getWeather() {
    this.weatherService
      .getCurrentWeather(this.lat, this.lon)
      .subscribe((res: any) => {
        this.currentWeather = res;
        this.weatherDescription = res.weather[0].main
          .replace(' ', '_')
          .toLowerCase();
      });
  }

  getHour() {
    this.weatherService
      .getHourlyWeather(this.lat, this.lon)
      .subscribe((res: any) => {
        this.hourlyWeather = res;
      });
  }
}
