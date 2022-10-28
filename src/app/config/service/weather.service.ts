import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  readonly bffApi: string = environment.appConfig.urls.openWeatherMap;
  readonly keyApi: string = environment.appConfig.urls.keyOpenWeatherMap;
  constructor(private http: HttpClient) { };

  // you should declare an interface for your response, Observable of something (like Weather..) it can be readOnly too as you will not mutate the Interface
  getWeatherByCity(city:Readonly<string>): any{
    // readonly should be a better implementation, no need to declare let
    // you should also create a factory or at least a mapper that will only retrieve the necessary propertys for your client side component
    try {
      return this.http.get(`${this.bffApi}/2.5/weather?q=${city},fr&APPID=${this.keyApi}`)
    }
    catch(e) {
      console.log('Error ', e)
      return e
    }
  }
}
