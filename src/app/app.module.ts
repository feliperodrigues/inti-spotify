import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@app/shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { UserComponent } from './user/user.component';
import { MobileMenuComponent } from './shared/mobile-menu.component';
import { DialogConfirmComponent } from './shared/dialog-confirm.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ExpireTokenInterceptor } from './user/expire-token.interceptor';

registerLocaleData(localePt);

@NgModule({
	declarations: [
		AppComponent,
		CallbackComponent,
		UserComponent,
		MobileMenuComponent,
		DialogConfirmComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		HttpClientModule,
		SimpleNotificationsModule.forRoot(),
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'pt' },
		{ provide: HTTP_INTERCEPTORS, useClass: ExpireTokenInterceptor, multi: true }
	],
	entryComponents: [
		DialogConfirmComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
