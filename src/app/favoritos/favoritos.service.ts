import { Injectable } from '@angular/core';

import { IAlbum, IArtista, IMusica } from '@app/model';

import { AppService } from '../app.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
	providedIn: 'root'
})
export class FavoritosService extends AppService {

	public constructor(private notification:NotificationsService) {
		super();
	}

	public saveFavorite(item: IArtista | IAlbum | IMusica, type: string) :void {
		let items: string[] = [];
		items.push(item.id);

		if(localStorage.getItem(type)) {
			items = this.getFavorites(type);
			items = this.addRemoveItem(items, item);
		}

		localStorage.setItem(type, JSON.stringify(items));
	}

	public getFavorites(type :string = 'all') :any[] {
		let artistas: string[] = JSON.parse(localStorage.getItem('artistas'));
		let albuns: string[] = JSON.parse(localStorage.getItem('albuns'));
		let musicas: string[] = JSON.parse(localStorage.getItem('musicas'));

		if (type === 'artistas') { return artistas ? artistas : []; }
		if (type === 'albuns') { return albuns ? albuns : []; }
		if (type === 'musicas') { return musicas ? musicas : []; }

		if (!artistas) { artistas = []; }
		if (!albuns) { albuns = []; }
		if (!musicas) { musicas = []; }

		return artistas.concat(albuns, musicas);

	}

	public countFavorites(): number {
		return this.getFavorites().length;
	}

	private addRemoveItem(items: string[], item: IArtista | IAlbum | IMusica): string[] {
		const index = items.indexOf(item.id);
		if (index === -1) {
			items.push(item.id);
			this.notification.success('INTI Spotify', '\"' + item.name + '\" foi adicionado no seus favoritos.');
			return items;
		}

		items.splice(index, 1);
		this.notification.warn('INTI Spotify', '\"' + item.name + '\" foi removido do seus favoritos.');
		return items;
	}
}