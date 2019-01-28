import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-paginacao',
	templateUrl: 'paginacao.component.html'
})
export class PaginacaoComponent {

	@Input()
	public total: number;

	@Input()
	public currentPage: number;

	@Input()
	public totalPages: number;

	@Input()
	public typeSingular: string;

	@Input()
	public typePlural: string;

	@Output()
	public onChangePage: EventEmitter<number> = new EventEmitter();

	constructor() {	}

	public changePage(value: number): void {
		this.onChangePage.emit(value);
	}

}
