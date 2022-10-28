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
    cityList: cityModel[] = [];

    ngOnInit() {
    }

    addCity(cityName: string): void {
        if (cityName) {
            const weatherInfo = this.weatherService.getWeatherByCity(cityName)

            // You can replace any by your factory interface, or at least use a Readonly<any> in order to avoid mutation from your service
            weatherInfo.subscribe((value: any) => {
                // @ts-ignore
                // cities should be a better naming, no need to specifiy the type of your property because your doing typescript typing with Array or []
                return this.cityList.push(value);
            });
        }
    }

    addGeoloc(): void {
        return this.geolocService.getWeatherByGeoloc()
    }
}