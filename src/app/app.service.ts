import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

	protected getHeaders() {
		let headers = new HttpHeaders({
			'Content-Type':  'application/json; charset=UTF-8',
			'Authorization': 'Bearer ' + localStorage.getItem('access_token')
		});

		return { 'headers' : headers };
	}

	protected get baseApi(): string {
		return 'https://api.spotify.com/v1/';
	}
}
