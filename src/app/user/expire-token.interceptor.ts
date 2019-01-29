import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserService } from './user.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ExpireTokenInterceptor implements HttpInterceptor {

	constructor(private router: Router, private userService: UserService, private notification: NotificationsService, private location: Location) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			tap(event => {
				if(event.type == HttpEventType.Response) {
					if(event.status == 401) {
						this.userService.user = undefined;
						localStorage.setItem('nextUrl', this.location.path());
						localStorage.removeItem('access_token');
						this.notification.error('INTI Spotify', 'Sua sessão expirou, faça o login novamente para continuar.');
					}
				}
			})
		);
	}

}