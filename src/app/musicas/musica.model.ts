import { IArtista } from '../artistas/artista.model';

export interface IMusica {
	album: any;
	artists: IArtista[];
	duration_ms: number;
	explicit: boolean;
	external_urls : any;
	id: string;
	name: string;
	popularity: number;
}