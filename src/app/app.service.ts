import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

	protected getHeaders(contentType: string = 'application/json;') {
		let headers = new HttpHeaders({
			'Content-Type':  contentType,
			'Authorization': 'Bearer ' + localStorage.getItem('access_token')
		});

		return { 'headers' : headers };
	}

	protected get baseApi(): string {
		return 'https://api.spotify.com/v1/';
	}
}
