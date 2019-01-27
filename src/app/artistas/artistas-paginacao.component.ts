import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-artistas-paginacao',
	templateUrl: 'artistas-paginacao.component.html'
})
export class ArtistasPaginacaoComponent {

	@Input()
	public total: number;

	@Input()
	public currentPage: number;

	@Input()
	public totalPages: number;

	@Output()
	public onChangePage: EventEmitter<number> = new EventEmitter();

	constructor() {	}

	public changePage(value: number): void {
		this.onChangePage.emit(value);
	}

}
