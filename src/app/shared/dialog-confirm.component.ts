import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-dialog-confirm',
	templateUrl: 'dialog-confirm.component.html',
})
export class DialogConfirmComponent {

	@Input()
	public title = 'Tem certeza?';

	@Input()
	public btnYesLabel = 'Sim';

	@Input()
	public btnNoLabel = 'Não';

	@Input()
	public description: string;

	constructor(public dialogRef: MatDialogRef<DialogConfirmComponent>) {
	}

	public yesOnClick() {
		this.dialogRef.close(true);
	}

	public noOnClick() {
		this.dialogRef.close();
	}
}
