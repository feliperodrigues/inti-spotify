import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistasComponent } from './artistas.component';
import { ArtistaComponent } from './content/artista.component';

const routes: Routes = [
	{
		path: '',
		component: ArtistasComponent,
		data: { title: 'Artistas' }
	},
	{
		path: ':id',
		component: ArtistaComponent,
		data: { title: 'Artista' }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ArtistasRoutingModule {}
