// Angular
import { Component, OnInit } from '@angular/core';

// Current
import { DialogService } from './services/dialog.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [ DialogService ],
})
export class DialogComponent implements OnInit {

  constructor(
    private _dialogService: DialogService,
  ) { }

  ngOnInit(): void {
  }

  public openDialog(): void {
    this._dialogService.open();
  }

}
