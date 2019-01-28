import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
	MatButtonModule,
	MatInputModule,
	MatTooltipModule
} from '@angular/material';
import { PaginacaoComponent } from './paginacao.component';
import { MomentModule } from 'ngx-moment';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MomentModule,

		/** Material Components */
		MatButtonModule,
		MatInputModule,
		MatTooltipModule,
		/** END -- Material Components */
	],
	declarations: [
		PaginacaoComponent
	],
	providers: [
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MomentModule,

		PaginacaoComponent,

		/** Material Components */
		MatButtonModule,
		MatInputModule,
		MatTooltipModule
		/** END -- Material Components */
	]
})

export class SharedModule {}
