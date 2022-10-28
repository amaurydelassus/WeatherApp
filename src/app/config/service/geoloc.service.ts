import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class GeolocService {

    readonly bffApi: string = environment.appConfig.urls.openWeatherMap;
    readonly keyApi: string = environment.appConfig.urls.keyOpenWeatherMap;

    constructor(private http: HttpClient) {
    };

    getWeatherByGeoloc(): any {
        try {
            return navigator.geolocation.getCurrentPosition(
                (position) => this.http.get(`${this.bffApi}/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${this.keyApi}`).subscribe(
                    response => response
                )
            );
        } catch (e) {
            console.log('Error ', e)
            return e
        }
    }
}