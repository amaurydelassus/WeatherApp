import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherCity(test:string): Observable<Object>{
    console.log(test)
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Lille,fr&APPID=1be2d16ca1e8f4250b426a94cbb888ca')
  }
}
