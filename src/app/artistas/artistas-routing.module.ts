import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistasComponent } from './artistas.component';

const routes: Routes = [
	{
		path: '',
		component: ArtistasComponent,
		data: {
			title: 'Dashboard'
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ArtistasRoutingModule {}
