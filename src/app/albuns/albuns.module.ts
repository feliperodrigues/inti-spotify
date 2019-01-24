import { NgModule } from '@angular/core';

import { AlbunsComponent } from './albuns.component';
import { AlbunsRoutingModule } from './albuns-routing.module';

@NgModule({
	imports: [
		AlbunsRoutingModule,
	],
	declarations: [
		AlbunsComponent ]
})
export class AlbunsModule { }
