import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';
import { FavoritosService } from './favoritos/favoritos.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(public userService: UserService, public favoritosService: FavoritosService) {
	}
}
