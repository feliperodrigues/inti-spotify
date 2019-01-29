import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
		HttpClientModule
		HttpClientModule,
		SimpleNotificationsModule.forRoot(),
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'pt' }
	],
	entryComponents: [
		DialogConfirmComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
