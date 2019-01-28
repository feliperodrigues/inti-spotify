import { NgModule } from '@angular/core';

import { FavoritosComponent } from './favoritos.component';
import { FavoritosRoutingModule } from './favoritos-routing.module';
import { SharedModule } from '@app/shared';

@NgModule({
	imports: [
		FavoritosRoutingModule,
		SharedModule
	],
	declarations: [
		FavoritosComponent
	]
})
export class FavoritosModule { }
