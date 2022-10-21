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
      weatherInfo.subscribe((value: any) => {
        // @ts-ignore
        return this.cityList.push(value);
      });
      console.log(this.cityList)
    }
  }
}
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