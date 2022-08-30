import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient ) { }

  apiKey: string='93f4e71f914c56fb0bdfb46a5952fed4' //La chiave potrebbe avere una scadenza 

  getCurrentWeather(lat:any, lon:any){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
  }

  getHourlyWeather(lat:any, lon:any){
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&cnt=5`)
  }
  

}
