import { Component, OnInit } from '@angular/core';

import { InComponent } from '@app/shared';

import { IArtista, IMusica, IAlbum } from '@app/model';

import { ArtistasService } from '../artistas/artistas.service';
import { AlbunsService } from '../albuns/albuns.service';
import { MusicasService } from '../musicas/musicas.service';
import { UserService } from '../user/user.service';
import { FavoritosService } from './favoritos.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-favoritos',
	templateUrl: 'favoritos.component.html'
})
export class FavoritosComponent extends InComponent implements OnInit {

	public artists: IArtista[];
	public albums: IAlbum[];
	public tracks: IMusica[];

	constructor(private artistasService: ArtistasService, private albunsService: AlbunsService, private musicasService: MusicasService, public userService: UserService, private favoritosService: FavoritosService, private router: Router) {
		super();
	}

	ngOnInit() {
		this.getSeveralArtists();
		this.getSeveralAlbums();
		this.getSeveralTracks();
	}

	public getSeveralArtists() {
		const artistsIds: string[] = this.favoritosService.getFavorites('artistas');

		if(artistsIds.length === 0) {
			this.artists = [];
			return;
		}

		this.artistasService.getSeveralArtists(artistsIds).subscribe(
			data => {
				this.artists = data.artists;

				this.artists.forEach( (item) => {
					this.checkFavorite(item, 'artistas');
				});
			}, error => {
				console.error(error);
			}
		)
	}

	public getSeveralAlbums() {
		const albumsIds: string[] = this.favoritosService.getFavorites('albuns');

		if(albumsIds.length === 0) {
			this.albums = [];
			return;
		}

		this.albunsService.getSeveralAlbums(albumsIds).subscribe(
			data => {
				this.albums = data.albums;

				this.albums.forEach( (item) => {
					this.checkFavorite(item, 'albuns');
				});
			}, error => {
				console.error(error);
			}
		)
	}

	public getSeveralTracks() {
		const tracksIds: string[] = this.favoritosService.getFavorites('musicas');

		if(tracksIds.length === 0) {
			this.tracks = [];
			return;
		}

		this.musicasService.getSeveralTracks(tracksIds).subscribe(
			data => {
				this.tracks = data.tracks;

				this.tracks.forEach( (item) => {
					this.checkFavorite(item, 'musicas');
				});
			}, error => {
				console.error(error);
			}
		)
	}


	public saveFavorite(item: IArtista | IAlbum | IMusica, type: string) {
		this.favoritosService.saveFavorite(item, type);
		item.isFavorite = !item.isFavorite;

		let items = [];
		if(type == 'artistas') { items = this.artists; }
		if(type == 'albuns') { items = this.albums; }
		if(type == 'musicas') { items = this.tracks; }

		this.removeItem(items, item);
	}

	public checkFavorite(item: IArtista | IAlbum | IMusica, type:string): void {
		const favorites: string[] = this.favoritosService.getFavorites(type);
		for(let i = 0; i < favorites.length; i++) {
			if(favorites[i] === item.id) {
				item.isFavorite = true;
				return;
			}
		}

		item.isFavorite = false;
		return;
	}

	public goToArtista(artista: IArtista): void {
		this.artistasService.currentArtista = artista;
		this.router.navigate(['/artistas/' + artista.id]);
	}

	public goToAlbum(album: IAlbum): void {
		this.albunsService.currentAlbum = album;
		this.router.navigate(['/albuns/' + album.id]);
	}

	private removeItem(items: any[], item: any): void {
		const index = items.indexOf(item, 0);
		if (index > -1) {
			items.splice(index, 1);
		}
	}
}
