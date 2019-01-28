import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { InComponent } from '@app/shared';
import { IArtista } from '@app/model';

import { ArtistasService } from './artistas.service';
import { UserService } from '../user/user.service';

@Component({
	selector: 'app-artistas',
	templateUrl: 'artistas.component.html'
})
export class ArtistasComponent extends InComponent implements OnInit {

	public search: string;
	public prevSearch: string;
	public artists: IArtista[];

	public bestResult: IArtista;

	public total: number;
	public totalPages: number;
	private totalPerPage = 10;
	public currentPage = 1;

	constructor(public artistasService: ArtistasService, public userService :UserService, private activatedRoute: ActivatedRoute, private router: Router) {
		super();
	}

	ngOnInit() {
		this.activatedRoute.params.forEach(params => {
			if(params['q']) {
				this.search = params['q'];
				this.searchArtist();
				return;
			}
		});
	}

	public searchArtist(page:number = 1): void {
		this.smoothScroll();
		this.currentPage = page;

		this.prevSearch = this.search;
		this.router.navigate(['/artistas', {q : this.search}]);

		this.artistasService.searchArtist(this.search, page).subscribe(
			data => {
				this.artists = <IArtista[]>data.artists.items;
				this.total = data.artists.total;

				this.totalPages = Math.round(this.total / this.totalPerPage);

				if (this.currentPage === 1) {
					this.bestResult = this.artists.shift();
				}
			}, error => {
				console.warn(error);
			}
		)
	}

	public goToArtista(artista: IArtista): void {
		this.artistasService.currentArtista = artista;
		this.router.navigate(['/artistas/' + artista.id]);
	}

}
