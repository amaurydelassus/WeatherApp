import {Component, OnInit} from '@angular/core';
import {cityModel} from "../config/models/city";

@Component({
    selector: 'app-root',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{
    title = 'favoris de MR ';
    favoritesCities: cityModel[] = [];

    ngOnInit() {
        this.favoritesCities = JSON.parse(<string>localStorage.getItem('cities'))
    }

    deleteFavorite(city: cityModel):void {
        city.favorite = !city.favorite
        localStorage.setItem('cities', JSON.stringify(this.favoritesCities))
    }
}
