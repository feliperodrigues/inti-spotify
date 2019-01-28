import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { IAlbum } from '@app/model';

@Injectable({
	providedIn: 'root'
})
export class MusicasService extends AppService {

	public constructor(private http :HttpClient) {
		super();
	}

	public searchMusic(search: string, page: number = 1) :Observable<any> {
		let offset = 0;

		if(page > 1) {
			offset = page * 10;
		}

		return this.http.get<any>(this.baseApi + 'search?q='+search+'&type=track&offset='+offset+'&limit=10', this.getHeaders('application/x-www-form-urlencoded'));
	}

	public getSeveralTracks(albumsIds: string[]): Observable<any> {
		return this.http.get<any>(this.baseApi + 'tracks/?ids=' + albumsIds.join(','), this.getHeaders());
	}

}