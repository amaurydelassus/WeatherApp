import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccueilComponent} from "./accueil/accueil.component";
import {HttpClientModule} from "@angular/common/http";
import {FavoritesComponent} from "./favorites/favorites.component";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
