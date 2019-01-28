import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
	selector: 'app-callback',
	template: ''
})
export class CallbackComponent {

	constructor(private activatedRoute:ActivatedRoute, private router:Router, private userService :UserService) {
		localStorage.setItem('access_token', this.activatedRoute.snapshot.fragment.split('&')[0].split('=')[1]);

		this.userService.spotifyMe().subscribe(
			data => {
				this.userService.user = data;

				this.router.navigate([localStorage.getItem('nextUrl')]);
				localStorage.removeItem('nextUrl');
			}, error => {
				console.error(error);
			}
		);
	}
}
