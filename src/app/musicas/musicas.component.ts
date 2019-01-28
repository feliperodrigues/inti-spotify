import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { InComponent } from '@app/shared';
import { IAlbum, IArtista, IMusica } from '@app/model';

import { MusicasService } from './musicas.service';
import { UserService } from '../user/user.service';
import { AlbunsService } from '../albuns/albuns.service';
import { ArtistasService } from '../artistas/artistas.service';
import { FavoritosService } from '../favoritos/favoritos.service';

@Component({
	selector: 'app-musicas',
	templateUrl: 'musicas.component.html'
})
export class MusicasComponent extends InComponent implements OnInit {

	public search: string;
	public prevSearch: string;
	public tracks: IMusica[];

	public total: number;
	public totalPages: number;
	private totalPerPage = 10;
	public currentPage = 1;

	constructor(private musicasService: MusicasService, private albunsService: AlbunsService, private artistasService: ArtistasService, private favoritosService:FavoritosService, public userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
		super();
	}

	ngOnInit() {
		this.activatedRoute.params.forEach(params => {
			if(params['q']) {
				this.search = params['q'];
				this.searchMusic();
				return;
			}
		});
	}

	public searchMusic(page:number = 1): void {
		this.smoothScroll();
		this.currentPage = page;

		this.prevSearch = this.search;
		this.router.navigate(['/musicas', {q: this.search}]);

		this.musicasService.searchMusic(this.search, page).subscribe(
			data => {
				this.tracks = <IMusica[]>data.tracks.items;
				this.total = data.tracks.total;

				this.tracks.forEach((track) => {
					this.checkFavorite(track);
				});

				this.totalPages = Math.round(this.total / this.totalPerPage);
			}, error => {
				console.warn(error);
			}
		)
	}

	public goToArtista(artista: IArtista): void {
		this.router.navigate(['/artistas/' + artista.id]);
	}

	public goToAlbum(album: IAlbum): void {
		this.albunsService.currentAlbum = album;
		this.router.navigate(['/albuns/' + album.id]);
	}

	public saveFavorite(item: IMusica) {
		this.favoritosService.saveFavorite(item, 'musicas');
		item.isFavorite = !item.isFavorite;
	}

	public checkFavorite(item: IMusica): void {
		const favorites: string[] = this.favoritosService.getFavorites('musicas');
		for(let i = 0; i < favorites.length; i++) {
			if(favorites[i] === item.id) {
				item.isFavorite = true;
				return;
			}
		}

		item.isFavorite = false;
		return;
	}
}
