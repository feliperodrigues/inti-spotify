import { NgModule } from '@angular/core';

import { MusicasComponent } from './musicas.component';
import { MusicasRoutingModule } from './musicas-routing.module';

@NgModule({
	imports: [
		MusicasRoutingModule,
	],
	declarations: [
		MusicasComponent ]
})
export class MusicasModule { }
