import { Injectable } from '@angular/core';

import { IAlbum, IArtista, IMusica } from '@app/model';

import { AppService } from '../app.service';

@Injectable({
	providedIn: 'root'
})
export class FavoritosService extends AppService {

	public constructor() {
		super();
	}

	public saveFavorite(item: IArtista | IAlbum | IMusica, type: string) :void {
		let items: string[] = [];
		items.push(item.id);

		if(localStorage.getItem(type)) {
			items = JSON.parse(localStorage.getItem(type));
			items = this.addRemoveItem(items, item.id);
		}

		localStorage.setItem(type, JSON.stringify(items));
		console.log(localStorage.getItem(type));
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

	private addRemoveItem(items: string[], id: string): string[] {
		const index = items.indexOf(id);
		if (index === -1) {
			items.push(id);
			return items;
		}

		items.splice(index, 1);
		return items;
	}
}