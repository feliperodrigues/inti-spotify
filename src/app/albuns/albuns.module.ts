import { NgModule } from '@angular/core';

import { AlbunsComponent } from './albuns.component';
import { AlbunsRoutingModule } from './albuns-routing.module';
import { SharedModule } from '@app/shared';
import { AlbumComponent } from './content/album.component';

@NgModule({
	imports: [
		AlbunsRoutingModule,
		SharedModule,
	],
	declarations: [
		AlbunsComponent,
		AlbumComponent
	]
})
export class AlbunsModule { }
