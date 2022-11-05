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
        this.favoritesCities = JSON.parse(<string>localStorage.getItem('favorite'))
    }

    deleteFavorite(city: cityModel):void {
        this.favoritesCities.forEach((value, index) => {
            if(value==city) this.favoritesCities.splice(index,1)
        })
        localStorage.setItem('favorite', JSON.stringify(this.favoritesCities))
    }
}
