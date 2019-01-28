import { IArtista } from './artista.model';
import { IAlbum } from '@app/model';

export interface IMusica {
	album: IAlbum;
	artists: IArtista[];
	duration_ms: number;
	explicit: boolean;
	external_urls : any;
	id: string;
	name: string;
	popularity: number;

	isFavorite: boolean;
}