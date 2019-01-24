import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './user.model';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	public user:IUser;

	constructor(private http: HttpClient) { }

	public spotifyMe() :Observable<IUser> {
		const headers = new HttpHeaders({
			'Content-Type':  'application/json; charset=UTF-8',
			'Authorization': 'Bearer ' + localStorage.getItem('access_token')
		});

		return this.http.get<IUser>('https://api.spotify.com/v1/me', { 'headers' : headers });
	}
}
