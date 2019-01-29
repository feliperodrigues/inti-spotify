import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-callback',
	template: ''
})
export class CallbackComponent implements OnInit, OnDestroy {

	private sub: Subscription;

	constructor(private userService :UserService, private activatedRoute:ActivatedRoute, private router:Router) {
		this.sub = this.router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				if (this.activatedRoute.snapshot.fragment) {
					localStorage.setItem('access_token', this.activatedRoute.snapshot.fragment.split('&')[0].split('=')[1]);

					this.spotifyMe();
					return;
				}

				this.router.navigate(['/artistas']);
			}
		});
	}

	ngOnInit() {
	}

	private spotifyMe(): void {
		this.userService.spotifyMe().subscribe(
			data => {
				this.userService.user = data;

				if(localStorage.getItem('nextUrl')) {
					this.router.navigate([localStorage.getItem('nextUrl')]);
					localStorage.removeItem('nextUrl');
					return;
				}

				this.router.navigate(['/artistas']);

			}, error => {
				console.error(error);
			}
		);
	}

	 ngOnDestroy() {
		 this.sub.unsubscribe();
	 }
}
