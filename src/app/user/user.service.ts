import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '@app/model';
import { AppService } from '../app.service';

@Injectable({
	providedIn: 'root'
})
export class UserService extends AppService {

	public user:IUser;

	constructor(private http: HttpClient) {
		super();
	}

	public spotifyMe() :Observable<IUser> {
		const headers = new HttpHeaders({
			'Content-Type':  'application/json; charset=UTF-8',
			'Authorization': 'Bearer ' + localStorage.getItem('access_token')
		});

		return this.http.get<IUser>(this.baseApi + 'me', { 'headers' : headers });
	}
}
