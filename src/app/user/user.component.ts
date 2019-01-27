import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from './user.service';

@Component({
	selector: 'app-user',
	templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

	private nextURL: string;

	constructor(public userService: UserService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {
		this.nextURL = this.location.path();
	}

	ngOnInit() {
		if(localStorage.getItem('access_token')) {
			this.userService.spotifyMe().subscribe(
				data => {
					this.userService.user = data;
					this.router.navigate([this.nextURL]);
					this.nextURL = undefined;
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
