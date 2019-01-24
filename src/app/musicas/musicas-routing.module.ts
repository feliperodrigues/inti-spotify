import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicasComponent } from './musicas.component';

const routes: Routes = [
	{
		path: '',
		component: MusicasComponent,
		data: {
			title: 'Músicas'
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MusicasRoutingModule {}
