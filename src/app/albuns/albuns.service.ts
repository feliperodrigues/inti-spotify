import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { IAlbum } from '@app/model';

@Injectable({
	providedIn: 'root'
})
export class AlbunsService extends AppService {

	public currentAlbum: IAlbum;

	public constructor(private http :HttpClient) {
		super();
	}

	public searchAlbum(search: string, page: number = 1) :Observable<any> {
		let offset = 0;

		if(page > 1) {
			offset = page * 10;
		}

		return this.http.get<any>(this.baseApi + 'search?q='+search+'&type=album&offset='+offset+'&limit=10', this.getHeaders('application/x-www-form-urlencoded'));
	}

	public getAlbum(id?: string): Observable<any> {
		if(id === undefined) {
			id = this.currentAlbum.id;
		}
		return this.http.get<any>(this.baseApi + 'albums/' + id, this.getHeaders());
	}

	public getTracks(id?: string): Observable<any> {
		if(id === undefined) {
			id = this.currentAlbum.id;
		}
		return this.http.get<any>(this.baseApi + 'albums/' + id + '/tracks', this.getHeaders());
	}

	public getSeveralAlbums(albumsIds: string[]): Observable<any> {
		return this.http.get<any>(this.baseApi + 'albums?ids=' + albumsIds.join(','), this.getHeaders());
	}

}