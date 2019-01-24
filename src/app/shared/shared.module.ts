import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		/** Material Components */
		MatButtonModule,

		/** END -- Material Components */
	],
	declarations: [
	],
	providers: [
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		/** Material Components */
		MatButtonModule,

		/** END -- Material Components */
	]
})

export class SharedModule {}
