import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../config/service/weather.service";
import {cityModel} from "../config/models/city";
import {GeolocService} from "../config/service/geoloc.service";

@Component({
    selector: 'app-root',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
    constructor(private weatherService: WeatherService, private geolocService: GeolocService,) {
    }

    title = 'accueil page';
    cities: cityModel[] = [];

    ngOnInit() {
    }

    addCity(cityName: string): void {
        if (cityName) {
            const weatherInfo = this.weatherService.getWeatherByCity(cityName)

            weatherInfo.subscribe((value: Readonly<cityModel>) => {
                return this.cities.push(value);
            });
        }
    }

    addGeoloc(): void {
        navigator.geolocation.getCurrentPosition(
            (position) => this.geolocService.getWeatherByGeoloc(position.coords.latitude, position.coords.longitude).subscribe((value: any) => {
                // @ts-ignore
                // cities should be a better naming, no need to specifiy the type of your property because your doing typescript typing with Array or []
                return this.cityList.push(value);
            }), (e) => console.log(e)
        );
    }
