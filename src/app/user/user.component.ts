import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
	selector: 'app-user',
	templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

	constructor(public userService: UserService) {

	}

	ngOnInit() {
		if(localStorage.getItem('access_token')) {
			this.userService.spotifyMe().subscribe(
				data => {
					this.userService.user = data;
				}, error => {
					localStorage.removeItem('access_token');
				}
			)
		}
	}

	public logout() {
		localStorage.removeItem('access_token');
		this.userService.user = undefined;
	}

	public get accessToken() :string {
		return localStorage.getItem('access_token');
	}
}
