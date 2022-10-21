import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // getWeatherByCity should be a better naming 
  // your city property can be let in readonly as you will not mutate it in your method body
  // you should declare an interface for your response, Observable of something (like Weather..) it can be readOnly too as you will not mutate the Interface
  getWeatherCity(city:string): Observable<Object>{
    // remove dirty console log
    console.log(city)
    // readonly should be a better implementation, no need to declare let 
    // import API key from .env file in order to improve security
    let key : String = '8cd0d6ac2fcfd01c9ab3c426b7c7d5c9'
    // missing error management, please use functionnal Exception();
    // externalise API URL in .env file 
    // you should also create a factory or at least a mapper that will only retrieve the necessary propertys for your client side component
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},fr&APPID=${key}`)
  }
}
