import { Component, OnInit, isDevMode } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';

import { InComponent } from '@app/shared';

import { UserService } from './user.service';
import { FavoritosService } from '../favoritos/favoritos.service';
import { DialogConfirmComponent } from '../shared/dialog-confirm.component';

@Component({
	selector: 'app-user',
	templateUrl: 'user.component.html'
})
export class UserComponent extends InComponent implements OnInit {

	constructor(public userService: UserService, public favoritosService:FavoritosService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location, public dialog: MatDialog) {
		super();
		if(!localStorage.getItem('nextUrl')) {
			localStorage.setItem('nextUrl', this.location.path());
		}
	}

	ngOnInit() {
		if(localStorage.getItem('access_token')) {
			this.loading = true;

			this.userService.spotifyMe().subscribe(
				data => {
					this.userService.user = data;
					this.router.navigate([localStorage.getItem('nextUrl')]);
					localStorage.removeItem('nextUrl');
				}, error => {
					localStorage.removeItem('access_token');
				}, () => {
					this.loading = false;
				}
			)
		}
	}

	public openLogoutDialog() {
		const dialogRef = this.dialog.open(DialogConfirmComponent);
		dialogRef.componentInstance.description = 'Seus favoritos será apagado.';
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.logout();
			}
		});
	}

	public logout() {
		localStorage.clear();
		this.userService.user = undefined;
		this.router.navigate(['/']);
	}

	get spotifyAuthUrl(): string {
		if(isDevMode()) {
			return 'https://accounts.spotify.com/authorize?client_id=ad7581618e5a48af980fdbecd2f1dc26&redirect_uri=http:%2F%2Flocalhost:4200%2Fcallback&response_type=token&state=init-spotify'
		}

		return 'https://accounts.spotify.com/authorize?client_id=ad7581618e5a48af980fdbecd2f1dc26&redirect_uri=https:%2F%2Finnercoders.com.br%2Finti-spotify%2Fcallback&response_type=token&state=inti-spotify'
	}
}
