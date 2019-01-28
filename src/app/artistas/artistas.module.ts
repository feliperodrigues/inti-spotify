import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { ArtistasComponent } from './artistas.component';
import { ArtistasRoutingModule } from './artistas-routing.module';
import { ArtistaComponent } from './content/artista.component';

@NgModule({
	imports: [
		ArtistasRoutingModule,
		SharedModule
	],
	declarations: [
		ArtistasComponent,
		ArtistaComponent,
	]
})
export class ArtistasModule { }
