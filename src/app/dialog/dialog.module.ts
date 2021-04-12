// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Current
import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';
import {MyDialogComponent} from './components/my-dialog/my-dialog.component';


@NgModule({
  declarations: [
    DialogComponent,

    MyDialogComponent,
  ],
  imports: [
    CommonModule,
    DialogRoutingModule,

    // Material
    MatButtonModule,
    MatDialogModule,
  ],
  entryComponents: [
    MyDialogComponent,
  ]
})
export class DialogModule { }
