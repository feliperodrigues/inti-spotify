import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(public userService: UserService, private router: Router	) {
	}
}
