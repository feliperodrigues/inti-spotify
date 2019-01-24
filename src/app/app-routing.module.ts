import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'artistas',
		pathMatch: 'full',
	},
	{
		path: 'artistas',
		loadChildren: './artistas/artistas.module#ArtistasModule'
	},
	{
		path: 'albuns',
		loadChildren: './albuns/albuns.module#AlbunsModule'
	},
	{
		path: 'musicas',
		loadChildren: './musicas/musicas.module#MusicasModule'
	},
	{
		path: 'favoritos',
		loadChildren: './favoritos/favoritos.module#FavoritosModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
