import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InComponent } from '@app/shared';
import { IAlbum, IArtista, IMusica } from '@app/model';

import { UserService } from '../../user/user.service';
import { AlbunsService } from '../albuns.service';
import { FavoritosService } from '../../favoritos/favoritos.service';

@Component({
	selector: 'app-album',
	templateUrl: 'album.component.html'
})
export class AlbumComponent extends InComponent implements OnInit {

	public tracks: IMusica[];
	public isFavorite: boolean;

	public get currentAlbum(): IAlbum {
		return this.albunsService.currentAlbum;
	}

	constructor(public albunsService: AlbunsService, public userService :UserService, private favoritosService:FavoritosService, private activatedRoute: ActivatedRoute) {
		super();
	}

	ngOnInit() {
		this.activatedRoute.params.forEach(params => {
			this.smoothScroll();

			if(this.albunsService.currentAlbum && this.albunsService.currentAlbum.id === params['id']) {
				this.loadAlbumData();
				return;
			}

			this.resetData();
			this.getAlbum(params['id']);
		});
	}

	public getAlbum(id: string): void {
		this.albunsService.getAlbum(id).subscribe(
			data => {
				this.albunsService.currentAlbum = data;
				this.loadAlbumData();
			}, error => {
				console.error(error);
			}
		)
	}

	public getTracks(): void {
		this.albunsService.getTracks().subscribe(
			data => {
				this.tracks = data.items;
			}, error => {
				console.error(error);
			}
		)
	}

	public saveFavorite(item: IAlbum) {
		this.favoritosService.saveFavorite(item, 'albuns');
		this.checkFavorite();
	}

	public checkFavorite(): void {
		const favorites: string[] = this.favoritosService.getFavorites('albuns');
		for(let i = 0; i < favorites.length; i++) {
			if(favorites[i] === this.albunsService.currentAlbum.id) {
				this.isFavorite = true;
				return;
			}
		}

		this.isFavorite = false;
	}

	private resetData(): void {
		this.albunsService.currentAlbum = undefined;
		this.tracks = undefined;
	}

	private loadAlbumData(): void {
		this.checkFavorite();
		this.getTracks();
	}
}
