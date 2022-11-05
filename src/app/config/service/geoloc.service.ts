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

    getWeatherByGeoloc(latitude : any ,longitude : any): any {
        try {
            return this.http.get(`${this.bffApi}/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${this.keyApi}`)
        } catch (e) {
            console.log('Error ', e)
            return e
        }
    }
}