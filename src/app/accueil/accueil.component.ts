import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WeatherService} from "../config/service/weather.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  constructor(private weatherService: WeatherService, ) { }

  title = 'accueil page';
  cityList: cityModel[] = [];
  ngOnInit() {}

  addCity(cityName: string): void {
    if (cityName) {
      const weatherInfo = this.weatherService.getWeatherCity(cityName)
      // You can replace any by your factory interface, or at least use a Readonly<any> in order to avoid mutation from your service 
      weatherInfo.subscribe((value: any) => {
        // @ts-ignore
        // cities should be a better naming, no need to specifiy the type of your property because your doing typescript typing with Array or []
        return this.cityList.push(value);
      });
      // remove dirty console.log()
      console.log(this.cityList)
    }
  }
}
// Good practice but not at the good place, you should externalize it into a seperated interface folder and then export a file who's contain your interface
// beware of shared entites model between front <> backend because if you break one implementation the other one will suffer from it.
export interface cityModel{
  coord : {
    lon: number,
    lat:number
  },
  weather: [
      {
        id:number,
        main:string,
        description:string,
        icon:string
      }],
  base:string,
  main:{
    temp:number,
    feels_like:number,
    temp_min:number,
    temp_max: number,
    pressure:number,
    humidity:number
  },
  visibility:number,
  wind:{
    speed:number,
    deg:number
  },
  clouds:{
    all:number},
  dt:number,
  sys:{
    type:number,
    id:number,
    country:string,
    sunrise:number,
    sunset:number
  },
  timezone:number,
  id:number,
  name:string,
  cod:number
}
