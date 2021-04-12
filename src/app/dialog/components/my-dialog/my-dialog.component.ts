// Angular
import { Component, Inject } from '@angular/core';

// Material
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-my-dialog',
  templateUrl: './my-dialog.component.html',
})
export class MyDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

}
