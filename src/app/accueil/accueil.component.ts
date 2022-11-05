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

    title = 'Weather Story !';
    cities: cityModel[] = [];
    citiesName: cityModel[] = [];
    favoritesCities: cityModel[] = []

    ngOnInit() {
    }

    addCity(cityName: string): void {
        if (cityName) {
            const weatherInfo = this.weatherService.getWeatherByCity(cityName)
            weatherInfo.subscribe((value: Readonly<cityModel>) => {
                this.addInCity(value)
            });
        }
    }

    addGeoloc(): void {
        navigator.geolocation.getCurrentPosition(
            (position) => this.geolocService.getWeatherByGeoloc(position.coords.latitude, position.coords.longitude).subscribe((value: any) => {
                this.addInCity(value)
            }),
            (e) => alert(e.message)
        );
    }

    addInCity(cityObject: any): void {
        if (this.citiesName.includes(cityObject.name)) {
            alert(cityObject.name + " est deja dans la liste")
        } else {
            this.cities.push(cityObject);
            this.citiesName.push(cityObject.name);
        }
    }

    addFavorites(city: any): void {
        let check = true
        this.favoritesCities.forEach((value, index) => {
            if(value.name==city.name) {
                this.favoritesCities.splice(index,1)
                check = false;
            }
        })
        if(check) this.favoritesCities.push(city)
        localStorage.setItem('favorite', JSON.stringify(this.favoritesCities))
    }
}