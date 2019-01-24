import { NgModule } from '@angular/core';

import { FavoritosComponent } from './favoritos.component';
import { FavoritosRoutingModule } from './favoritos-routing.module';

@NgModule({
	imports: [
		FavoritosRoutingModule,
	],
	declarations: [
		FavoritosComponent ]
})
export class FavoritosModule { }
