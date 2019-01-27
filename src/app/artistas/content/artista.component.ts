import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtistasService } from '../artistas.service';
import { UserService } from '../../user/user.service';

import { InComponent } from '@app/shared';
import { IAlbum } from '../../albuns/album.model';
import { IMusica } from '../../musicas/musica.model';

@Component({
	selector: 'app-artista',
	templateUrl: 'artista.component.html'
})
export class ArtistaComponent extends InComponent implements OnInit {

	private artistId: string;

	public albums: IAlbum[];
	public topTracks: IMusica[];

	public showMore = false;

	constructor(public artistasService: ArtistasService, public userService :UserService, private activatedRoute: ActivatedRoute) {
		super();
	}

	ngOnInit() {
		this.activatedRoute.params.forEach(params => {
			this.smoothScroll();

			if(this.artistasService.currentArtista && this.artistasService.currentArtista.id === params['id']) {
				this.getAlbuns();
				this.getTopTracks();
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
				this.getAlbuns();
				this.getTopTracks();
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

	private resetData(): void {
		this.showMore = false;
		this.artistasService.currentArtista = undefined;
		this.albums = undefined;
		this.topTracks = undefined;
	}
}
