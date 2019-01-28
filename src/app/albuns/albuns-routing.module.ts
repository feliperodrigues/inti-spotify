import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbunsComponent } from './albuns.component';
import { AlbumComponent } from './content/album.component';

const routes: Routes = [
	{
		path: '',
		component: AlbunsComponent,
		data: { title: 'Albuns' }
	},
	{
		path: ':id',
		component: AlbumComponent,
		data: { title: 'Album' }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AlbunsRoutingModule {}
