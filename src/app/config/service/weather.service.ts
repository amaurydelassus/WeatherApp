import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherCity(city:string): Observable<Object>{
    console.log(city)
    let key : String = '8cd0d6ac2fcfd01c9ab3c426b7c7d5c9'
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},fr&APPID=${key}`)
  }
}
