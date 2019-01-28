import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InComponent } from '@app/shared';
import { IAlbum, IArtista, IMusica } from '@app/model';

import { ArtistasService } from '../artistas.service';
import { UserService } from '../../user/user.service';
import { FavoritosService } from '../../favoritos/favoritos.service';


@Component({
	selector: 'app-artista',
	templateUrl: 'artista.component.html'
})
export class ArtistaComponent extends InComponent implements OnInit {

	public albums: IAlbum[];
	public topTracks: IMusica[];

	public showMore = false;
	public isFavorite: boolean;

	public get currentArtista(): IArtista {
		return this.artistasService.currentArtista;
	}

	constructor(public artistasService: ArtistasService, public userService :UserService, public favoritosService: FavoritosService, private activatedRoute: ActivatedRoute) {
		super();
	}

	ngOnInit() {
		this.activatedRoute.params.forEach(params => {
			this.smoothScroll();

			if(this.artistasService.currentArtista && this.artistasService.currentArtista.id === params['id']) {
				this.loadArtistData();
				return;
			}

			this.resetData();
			this.getArtist(params['id']);
		});
	}

	public getArtist(id: string): void {
		this.artistasService.getArtist(id).subscribe(
			data => {
				this.artistasService.currentArtista = data;
				this.loadArtistData();
			}, error => {
				console.error(error);
			}
		)
	}

	public getAlbuns(): void {
		this.artistasService.getAlbums().subscribe(
			data => {
				this.albums = data.items;
			}, error => {
				console.error(error);
			}
		)
	}

	public getTopTracks(): void {
		this.artistasService.getTopTracks().subscribe(
			data => {
				this.topTracks = data.tracks;
			}, error => {
				console.error(error);
			}
		)
	}

	public saveFavorite(item: IArtista) {
		this.favoritosService.saveFavorite(item, 'artistas');
		this.checkFavorite();
	}

	public checkFavorite(): void {
		const favorites: string[] = this.favoritosService.getFavorites('artistas');
		for(let i = 0; i < favorites.length; i++) {
			if(favorites[i] === this.artistasService.currentArtista.id) {
				this.isFavorite = true;
				return;
			}
		}

		this.isFavorite = false;
	}

	private loadArtistData() {
		this.checkFavorite();
		this.getAlbuns();
		this.getTopTracks();
	}

	private resetData(): void {
		this.showMore = false;
		this.artistasService.currentArtista = undefined;
		this.albums = undefined;
		this.topTracks = undefined;
	}
}
