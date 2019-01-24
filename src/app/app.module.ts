import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@app/shared';
import { CallbackComponent } from './callback/callback.component';
import { UserComponent } from './user/user.component';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
	declarations: [
		AppComponent,
		CallbackComponent,
		UserComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		HttpClientModule
	],
	providers: [ { provide: LOCALE_ID, useValue: 'pt' } ],
	bootstrap: [AppComponent]
})
export class AppModule {
}
