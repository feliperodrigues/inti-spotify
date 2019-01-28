import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IAlbum, IArtista } from '@app/model';
import { InComponent } from '@app/shared';

import { UserService } from '../user/user.service';
import { AlbunsService } from './albuns.service';

@Component({
	selector: 'app-albuns',
	templateUrl: 'albuns.component.html'
})
export class AlbunsComponent extends InComponent implements OnInit {

	public search: string;
	public prevSearch: string;
	public albums: IAlbum[];

	public total: number;
	public totalPages: number;
	private totalPerPage = 10;
	public currentPage = 1;

	constructor(public albunsService: AlbunsService, public userService :UserService, private activatedRoute: ActivatedRoute, private router: Router) {
		super();
	}

	ngOnInit() {
		this.activatedRoute.params.forEach(params => {
			if(params['q']) {
				this.search = params['q'];
				this.searchAlbum();
				return;
			}
		});
	}

	public searchAlbum(page:number = 1): void {
		this.smoothScroll();
		this.currentPage = page;

		this.prevSearch = this.search;
		this.router.navigate(['/albuns', {q: this.search}]);

		this.albunsService.searchAlbum(this.search, page).subscribe(
			data => {
				this.albums = <IAlbum[]>data.albums.items;
				this.total = data.albums.total;

				this.totalPages = Math.round(this.total / this.totalPerPage);
			}, error => {
				console.warn(error);
			}
		)
	}

	public goToAlbum(album: IAlbum): void {
		this.albunsService.currentAlbum = album;
		this.router.navigate(['/albuns/' + album.id]);
	}
}
