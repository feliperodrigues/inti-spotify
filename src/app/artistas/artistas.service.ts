import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { IArtista } from '@app/model';

@Injectable({
	providedIn: 'root'
})
export class ArtistasService extends AppService {

	public currentArtista: IArtista;

	public constructor(private http :HttpClient) {
		super();
	}

	public searchArtist(search: string, page: number = 1) :Observable<any> {
		let offset = 0;

		if(page > 1) {
			offset = page * 10;
		}

		return this.http.get<any>(this.baseApi + 'search?q='+search+'&type=artist&offset='+offset+'&limit=10', this.getHeaders('application/x-www-form-urlencoded'));
	}

	public getArtist(id?: string): Observable<any> {
		if(id === undefined) {
			id = this.currentArtista.id;
		}
		return this.http.get<any>(this.baseApi + 'artists/' + id, this.getHeaders());
	}

	public getAlbums(id?: string): Observable<any> {
		if(id === undefined) {
			id = this.currentArtista.id;
		}
		return this.http.get<any>(this.baseApi + 'artists/' + id + '/albums?include_groups=album&limit=5', this.getHeaders());
	}

	public getTopTracks(id?: string): Observable<any> {
		if(id === undefined) {
			id = this.currentArtista.id;
		}
		return this.http.get<any>(this.baseApi + 'artists/'+ id +'/top-tracks?market=from_token', this.getHeaders());
	}

	public getSeveralArtists(artistsIds: string[]): Observable<any> {
		return this.http.get<any>(this.baseApi + 'artists?ids=' + artistsIds.join(','), this.getHeaders());
	}
}