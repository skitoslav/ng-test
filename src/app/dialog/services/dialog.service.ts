// Angular
import { Injectable } from '@angular/core';

// Material
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

// Current
import { MyDialogComponent } from '../components/my-dialog/my-dialog.component';


@Injectable()
export class DialogService {

  private _dialogRef: MatDialogRef<MyDialogComponent>;

  constructor(
    private _dialog: MatDialog,
  ) { }

  public open(): void {
    this._dialogRef = this._dialog.open(MyDialogComponent, {
      width: '250px',
      data: {},
    });
  }

  public close(): void {
    this._dialogRef.close();
  }

}
