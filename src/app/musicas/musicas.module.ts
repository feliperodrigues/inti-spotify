import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { MusicasComponent } from './musicas.component';
import { MusicasRoutingModule } from './musicas-routing.module';

@NgModule({
	imports: [
		MusicasRoutingModule,
		SharedModule
	],
	declarations: [
		MusicasComponent
	]
})
export class MusicasModule { }
