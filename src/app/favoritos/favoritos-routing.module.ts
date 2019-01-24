import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritosComponent } from './favoritos.component';

const routes: Routes = [
	{
		path: '',
		component: FavoritosComponent,
		data: {
			title: 'Dashboard'
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FavoritosRoutingModule {}
