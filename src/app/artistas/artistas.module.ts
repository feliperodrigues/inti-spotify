import { NgModule } from '@angular/core';

import { ArtistasComponent } from './artistas.component';
import { ArtistasRoutingModule } from './artistas-routing.module';
import { SharedModule } from '@app/shared';

@NgModule({
	imports: [
		ArtistasRoutingModule,
		SharedModule
	],
	declarations: [
		ArtistasComponent ]
})
export class ArtistasModule { }
