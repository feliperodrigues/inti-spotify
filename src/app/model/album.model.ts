export interface IAlbum {
	album_group: string;
	album_type: string;
	artists: any[];
	available_markets: string[];
	href: string;
	id: string;
	images: any[];
	name: string;
	release_date: string;
	total_tracks: number;
	type: string;
	uri: string;
	external_urls: any[];

	isFavorite: boolean;
}