import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccueilComponent} from "./accueil/accueil.component";
import {HttpClientModule} from "@angular/common/http";
import {FavoritesComponent} from "./favorites/favorites.component";
import {WeatherService} from "./config/service/weather.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GeolocService} from "./config/service/geoloc.service";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService, GeolocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
