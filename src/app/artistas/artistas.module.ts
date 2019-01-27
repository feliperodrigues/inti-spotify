import { NgModule } from '@angular/core';

import { ArtistasComponent } from './artistas.component';
import { ArtistasRoutingModule } from './artistas-routing.module';
import { SharedModule } from '@app/shared';
import { ArtistasPaginacaoComponent } from './artistas-paginacao.component';
import { ArtistaComponent } from './content/artista.component';

@NgModule({
	imports: [
		ArtistasRoutingModule,
		SharedModule
	],
	declarations: [
		ArtistasComponent,
		ArtistasPaginacaoComponent,
		ArtistaComponent,
	]
})
export class ArtistasModule { }
